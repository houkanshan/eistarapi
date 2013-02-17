# encoding: UTF-8
class Post < Resource

  host = settings.api['host']
  URL = {
    board_page: "#{host}/bbsdoc",
    post_page: "#{host}/bbscon",
    edit_page: "#{host}/bbspst",
    create_url: "#{host}/bbssnd",
    update_url: "#{host}/bbsedit",
    reply_url: "#{host}/bbspst",
    delete_url: "#{host}/bbsdel",
    cc_url: "#{host}/bbsccc"
  }

  def list(boardname, opt = {start: 0, count: 20})
    begin
      # http://www.dian.org.cn:81/bbsdoc?board=Water
      depage = DePage.new(:post, "#{URL[:board_page]}?board=#{boardname}")
      depage.get_list opt[:start], opt[:count]
    rescue
      raise get_warning(depage.last_page.body)
    end
  end

  def find(boardname, filename)
    begin
      # http://www.dian.org.cn:81/bbscon?board=Water&file=M.1359670151.A
      url = "#{URL[:post_page]}?board=#{boardname}&file=#{filename}"

      post_page = self.class.get(url)
      post = parse_post_content(post_page.body)
      post[:filename] = filename

      post
    rescue
      raise get_warning(post_page.body)
    end
  end

  def create(boardname, opt = {})
    opt[:title] ||= ""
    opt[:signature] ||= 1
    opt[:autocr] ||= "on"
    opt[:text] ||= ""

    if (opt[:title].length == 0)
      raise "attribute wrong"
    end

    begin
      # http://www.dian.org.cn:81/bbssnd?board=Weather
      url = "#{URL[:create_url]}?board=#{boardname}"
      res = self.class.post(url, {body: opt})

      msg = get_warning(res.body)
      if (msg.class == String) && msg.index('不能')
        raise msg
      end

      opt
    rescue
      raise get_warning(res.body)
    end
  end
  
  def update(boardname, filename, opt)
    begin 
      opt[:text] ||= ""
      opt[:board] = boardname
      opt[:file] = filename
      opt[:type] = 1

      url = "#{URL[:update_url]}"

      res = self.class.post(url, {body: opt})

      msg = get_warning(res.body)
      if (msg.class == String && (msg.include?('不能') || msg.include?('无权')))
        raise msg
      end

      opt
    rescue
      raise get_warning(res.body)
    end
  end

  def delete(boardname, filename)
    begin
      url = "#{URL[:delete_url]}?board=#{boardname}&file=#{filename}"
      res = self.class.get(url)
      warning = get_warning(res.body)
      if warning.index('成功')
        warning
      else
        raise warning
      end
    rescue
      raise get_warning(res.body)
    end
  end


  def reply(boardname, filename, opt)
    #begin
      # http://www.dian.org.cn:81/bbspst?board=Water&file=M.1359670151.A
      url = link_to(:edit_page, boardname, filename)
      page = self.class.get(url)
      opt_orig = form_opt_of(page.body)

      # insert reply text
      opt[:text] ||= ""
      opt[:text] += "\n\n" + opt_orig[:text]

      opt_orig.merge! opt

      # post
      # http://www.dian.org.cn:81/bbssnd?board=Weather
      url = link_to(:create_url, boardname)
      res = self.class.post(url, {body: opt_orig})

      msg = get_warning(res.body)

      if (msg.class == String) && msg.index('不能')
        raise msg
      end


      opt_orig

    #rescue

    #end
  end

  def cc(boardname, filename, to)
    begin
    rescue
    end
  end

  private

  def link_to(page, boardname, filename=nil)
    url = "#{URL[page]}?board=#{boardname}" + (filename ? "&file=#{filename}" : '')
  end

end
