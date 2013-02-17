# encoding: UTF-8
class Session < Resource

  attr_reader :cookie

  host = settings.api['host']
  @@url = {
    login: "#{host}/bbslogin",
    logout: "#{host}/bbslogout",
    info: "#{host}/bbsinfo"
  }


  def initialize(username, password)
    res = self.class.post(@@url[:login], {
      body: {
        id: username,
        pw: password
      }
    })
    @cookie = get_set_cookies(res.body)

    raise get_warning(res.body) if @cookie.empty?
  end

  def self.destroy(cookie = {})
    #p cookie
    cookies(cookie)
    res = get(@@url[:logout]);
    cookie = ParseHtml.get_set_cookies(res.body)

    raise ParseHtml.get_warning(res.body) if cookie.empty?

    cookie
  end

  def destroy
    self.class.destroy(@cookie)
  end

  def self.test(cookie = {})
    cookies(cookie)
    res = get(@@url[:info]);

    if ParseHtml.get_warning(res.body).include?('未登录')
      {logined: false}.to_json
    else
      {logined: true}.to_json
    end
  end

  def test
    self.class.test(@cookie)
  end

end

