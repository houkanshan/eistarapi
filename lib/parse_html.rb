# encoding: UTF-8
require 'nokogiri'

module ParseHtml

  @@cookie_rex = /document.cookie='(\w+)=(\w*)'/



  def get_set_cookies(doc)
    scripts = parse(doc).css('script')

    cookie = {}
    scripts.each do |script|
      script.content =~ @@cookie_rex
      cookie[$1] = $2
    end

    cookie
  end

  def get_textcontent(doc)
    parse(doc).css('html')[0].content.strip
  end

  def get_warning(doc)
    node = parse(doc).css('html')[0]
    warn_text = node.content
    warn_text =~ /^.*! (.*)! .*$/
    warn = $1 || 
      (node.css('p').children[0] ? node.css('p').children[0].content : '')
  end

  def get_boards_list(doc)
    list = parse(doc).css('tr')[1..-1].collect do |node|
      cols = node.css('td')

      admin = cols[4].css('a')[0]
      admin = admin && admin.content

      {
        name: cols[1].content,
        category: cols[2].content[1...-1],
        title: crop_title(cols[3].content),
        admin: admin
      }
    end

    list
  end

  def get_title(doc)
    parse(doc).css('table')[0].content
  end

  def get_board_admin(doc)
    parse(doc).css('table')[1].css('a')[0].content
  end

  def get_board_note(doc)
    table = parse(doc).css('table')[0]
    table ? table.content : ''
  end

  def get_board_info(doc)
    {
      title: get_title(doc),
      admin: get_board_admin(doc),
    }
  end

  def get_posts_list(doc)
    posts = parse(doc).css('table')[2].css('tr')[1..-1].collect do |node|
      cols = node.css('td')
      {
        filename: cols[4].css('a')[0]['href'].match(/file=(M\..*\.A)/)[1],
        index: cols[0].content,
        author: {
          id: cols[2].content
        },
        date: cols[3].content,
        title: crop_title(cols[4].css('a')[0].content),
        size: get_size(cols[4].content)
      }
    end
    posts.reverse!
  end

  def get_topics_list(doc)
    topics = parse(doc).css('table')[0].css('tr')[1..-1].collect do |node|
      cols = node.css('td')
      {
        filename: filename_from_link(cols[4].css('a')[0]['href']),
        index: cols[0].content,
        author: {
          id: cols[2].content
        },
        date: cols[3].content,
        title: crop_title(cols[4].css('a')[0].content)
      }
    end

    topics 
  end

  def parse_post_content(doc)
    doc = parse(doc)

    # if error
    if doc.css('a').length < 2
      raise "error"
    end

    filecontent = doc.css('table')[0].content

    parse_content(filecontent)
  end

  def parse_topic_content(doc)
    doc = parse(doc)

    if doc.css('a').length < 2
      raise "error"
    end
    
    doc.css('table').collect do |post|
      filename = filename_from_link(post.css('a')[0]['href'])

      content = post.content

      content.sub!(/\n.+\n/, "\n")

      post = parse_content(content)
      post[:filename] = filename

      post
    end
  end

  def textarea_of(doc)
    doc = parse(doc)
    doc.css('textarea')[0].content
  end

  def form_opt_of(doc)
    doc = parse(doc)
    inputs = doc.css('input')

    {
      title: inputs[0]['value'],
      signature: 1,
      autocr: 'on',
      text: doc.css('textarea')[0].content
    }
  end

  def parse_usr_info(doc)
    doc = parse(doc)
    content = doc.css('table')[0].content
    content.gsub!("\r", '')

    lines = content.split("\n")


    if lines[1] =~ /(.*) \((.*)\) 共上站 (\d+) 次，发表文章 (\d+) 篇/
      id = $1
      name = $2
      login_count = $3
      post_count = $4
    end

    if lines[2] =~ /(?:\[(.*)\])?上次在 \[(.*)\] 从 \[(.*)\] 到本站一游。/
      constellation = $1
      last_login = {
        time: $2,
        from: $3
      }
    end

    if lines[3] =~ /信箱：\[.*\]  经验值：\[(\d+)\]\((.+)\) 表现值：\[(\d+)\]\((.+)\) 生命力：\[(.+)\]。/
      exp = {
      num: $1,
      title: $2
      }
      perf = {
        num: $3,
        title: $4
      }
      hp = {
        num: $5
      }
    end


    {
      id: id,
      name: name,
      login_count: login_count,
      post_count: post_count,
      constellation: constellation,
      last_login: last_login,
      exp: exp,
      hp: hp,
      perf: perf
    }
  end

  private
  @@title_rex = /○ /

  def parse(doc)
    Nokogiri::HTML(doc, nil, 'gbk')
  end

  def crop_title(title)
    title.sub(@@title_rex, '').strip
  end
  def get_size(str)
    str =~ /\((?:(\d+)字|(.+))\)/

    $1 || $2
  end

  def get_value(str)
    start = str.index(": ") + 2
    str[start..-1]
  end

  def get_author(author_str)
    pair = author_str.split(/[()]/)
    {
      id: pair[0].strip,
      name: pair[1]
    }
  end

  def filename_from_link(link)
    link.match(/file=(M\..*\.A)/)[1]
  end

  def get_date(date_str)
    date_str.split(/[()]/)[1]
  end

  @@from_rex = /^.*\[FROM: (.*)\].*$/
  def get_from(content)
    last_line = content.rindex("\n", -1) + 1
    content[last_line..-1].gsub(@@from_rex, '\1')
  end

  @@headSpRex = /(?:\r?\n){2}/

  def parse_content(filecontent)
    split_index = filecontent.index(@@headSpRex) 

    begin
      head = filecontent[0...split_index].split(/[\n,]/)
      body = filecontent[split_index...-1].strip

      {
        author: head && get_author(get_value(head[1])),
        border: head && get_value(head[2]),
        title: head && get_value(head[3]),
        date: head && get_date(get_value(head[4])),
        filename: '',
        text: body,
        from: get_from(body)
      }
    rescue
      {
        text: filecontent.strip,
        from: get_from(filecontent)
      }
    end
  end


end

ParseHtml.extend(ParseHtml)

