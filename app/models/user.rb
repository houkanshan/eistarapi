# encoding: UTF-8
class User < Resource
  @@url = {
    user_page: "#{@@host}/bbsqry",
  }

  def find(id)
    begin
      url = "#{@@url[:user_page]}?userid=#{id}"
      usr_page = self.class.get(url)
      
      parse_usr_info(usr_page.body)
    rescue 
      raise get_textcontent(usr_page.body)
    end
  end
end
