require_relative "./parse_html.rb"

class Resource
  include HTTParty
  include ParseHtml

  @@host = settings.api['host']

  def initialize(cookies={utmpid: ''})
    @cookies = cookies
    self.class.cookies(cookies)
  end

  @@converter = Encoding::Converter.new('utf-8', 'gbk')

  def encode_for_bbs(opt)
    new_opt = {}
    opt.each do |key, value|
      if value.class == String
        value = @@converter.convert(value) 
        value.gsub!("\r", '');
      end
      new_opt[key] = value
    end

    new_opt
  end
end

