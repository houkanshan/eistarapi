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
        author: cols[2].content,
        date: cols[3].content,
        title: crop_title(cols[4].content)
      }
    end
    posts.reverse!
  end

  private
  TITLE_REX = /○ /
  def crop_title(title)
    title.sub(TITLE_REX, '')
  end


end

ParseHtml.extend(ParseHtml)

