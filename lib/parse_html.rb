# encoding: UTF-8
require 'nokogiri'

module ParseHtml

  @@cookie_rex = /document.cookie='(\w+)=(\w+)'/



  def get_set_cookies(doc)
    scripts = parse(doc).css('script')

    cookie = {}
    scripts.each do |script|
      script.content =~ @@cookie_rex
      cookie[$1] = $2
    end

    cookie
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
    parse(doc).css('table')[0].content
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
        author_id: cols[2].content,
        date: cols[3].content,
        title: crop_title(cols[4].css('a')[0].content),
        size: get_size(cols[4].content)
      }
    end
    posts.reverse!
  end

  def parse_post_content(doc)
    doc = parse(doc)

    # if error
    if doc.css('a').length < 4
      raise "error"
    end

    filecontent = doc.css('table')[0].content

    split_index = filecontent.index("\n\n") 


    begin
      head = filecontent[0...split_index].split(/[\n,]/)
      body = filecontent[split_index...-1]

      {
        author: head && get_author(get_value(head[1])),
        border: head && get_value(head[2]),
        title: head && get_value(head[3]),
        date: head && get_date(get_value(head[4])),
        filename: '',
        content: body,
        from: get_from(body)
      }
    rescue
      {
        content: filecontent,
        from: get_from(filecontent)
      }
    end


  end

  def form_opt_of(doc)
    doc = parse(doc)
    inputs = doc.css('input')
    textareas = doc.css('textarea')

    {
      title: inputs[0]['value'],
      signature: 1,
      autocr: 'on',
      text: textareas[0].content
    }
  end

  private
  @@title_rex = /○ /
  @@from_rex = /^.*\[FROM: (.*)\].*$/

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
      id: pair[0],
      name: pair[1]
    }
  end

  def get_date(date_str)
    date_str.split(/[()]/)[1]
  end

  def get_from(content)
    last_line = content.rindex("\n", -3)
    content[last_line...-1].strip.sub(@@from_rex, '\1')
  end


end

ParseHtml.extend(ParseHtml)

