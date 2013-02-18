# encoding: UTF-8
class Topic < Resource
  host = settings.api['host']
  @@url = {
    board_page: "#{host}/bbstdoc",
    topic_page: "#{host}/bbstcon",
  }

  def list(boardname, opt = {start: 0, count: 20})
    begin
      depage = DePage.new(:topic, "#{@@url[:board_page]}?board=#{boardname}")
      depage.get_list opt[:start], opt[:count]
    rescue
      raise get_warning(depage.last_page.body)
    end
  end

  def find(boardname, filename)
    begin
      url = "#{@@url[:topic_page]}?board=#{boardname}&file=#{filename}"

      topic_page = self.class.get(url)
      posts = parse_topic_content(topic_page.body)
      #post[:filename] = filename

      posts
    rescue
      raise get_warning(topic_page.body)
    end
  end
end
