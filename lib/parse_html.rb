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
    warn_text = Nokogiri::HTML(doc).css('html')[0].content
    warn_text =~ /^.*! (.*)! .*$/
    warn = $1
  end

  def get_boards_list(doc)
    list = []
    Nokogiri::HTML(doc).css('tr')[1..-1].each do |node|
      cols = node.css('td')

      admin = cols[4].css('a')[0]
      admin = admin && admin.content

      list.push({
        name: cols[1].content,
        category: cols[2].content[1...-1],
        title: cols[3].content[3..-1],
        admin: admin
      })
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


end

ParseHtml.extend(ParseHtml)

