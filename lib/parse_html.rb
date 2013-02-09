# encoding: UTF-8
require 'nokogiri'

module ParseHtml

  COOKIE_REX = /document.cookie='(\w+)=(\w+)'/

  def get_set_cookies(doc)
    scripts = Nokogiri::HTML(doc).css('script')

    cookie = {}
    scripts.each do |script|
      script.content =~ COOKIE_REX
      cookie[$1] = $2
    end

    cookie
  end

  def get_warning(doc)
    node = Nokogiri::HTML(doc).css('html')[0]
    warn_text = node.content
    warn_text =~ /^.*! (.*)! .*$/
    warn = $1 || node.css('p').children[0].content
  end

  def get_boards_list(doc)
    list = Nokogiri::HTML(doc).css('tr')[1..-1].collect do |node|
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
    Nokogiri::HTML(doc).css('table')[0].content
  end

  def get_board_admin(doc)
    Nokogiri::HTML(doc).css('table')[1].css('a')[0].content
  end

  def get_board_note(doc)
    Nokogiri::HTML(doc).css('table')[0].content
  end

  def get_board_info(doc)
    {
      title: get_title(doc),
      admin: get_board_admin(doc),
    }
  end

  def get_posts_list(doc)
    posts = Nokogiri::HTML(doc).css('table')[2].css('tr')[1..-1].collect do |node|
      cols = node.css('td')

      {
        filename: cols[4].css('a')[0]['href'].match(/file=(M\..*\.A)/)[1],
        index: cols[0].content,
        author_id: cols[2].content,
        date: cols[3].content,
        title: crop_title(cols[4].css('a')[0].content),
        size: cols[4].css('font')[0].content
      }
    end
    posts.reverse!
  end

  def get_post_content(doc)
    filecontent = Nokogiri::HTML(doc).css('table')[0].content
    split_index = filecontent.index("\n\n") 

    head = filecontent[0...split_index].split(/[\n,]/)
    body = filecontent[split_index...-1]

    {
      author: get_author(get_value(head[1])),
      border: get_value(head[2]),
      title: get_value(head[3]),
      date: get_date(get_value(head[4])),
      filename: '',
      content: body,
      from: get_from(body)
    }
  end

  private
  TITLE_REX = /○ /
  FROM_REX = /^.*\[FROM: (.*)\].*$/

  def crop_title(title)
    title.sub(TITLE_REX, '').strip
  end
  def get_value(str)
    str.split(": ")[1]
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
    last_line = content.rindex("\n", -2)
    content[last_line...-1].sub(FROM_REX, '\1')
  end


end

ParseHtml.extend(ParseHtml)

