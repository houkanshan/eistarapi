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

end

ParseHtml.extend(ParseHtml)
