# encoding: UTF-8
class Post < Resource

  host = settings.api['host']
  @@url = {
    board_page: "#{host}/bbsdoc",
    post_page: "#{host}/bbscon",
    edit_page: "#{host}/bbsedit",
    reply_page: "#{host}/bbspst",
    create_url: "#{host}/bbssnd",
    update_url: "#{host}/bbsedit",
    reply_url: "#{host}/bbspst",
    delete_url: "#{host}/bbsdel",
    cc_url: "#{host}/bbsccc"
  }

  def list(boardname, opt = {start: 0, count: 20})
    begin
      # http://www.dian.org.cn:81/bbsdoc?board=Water
      depage = DePage.new(:post, "#{@@url[:board_page]}?board=#{boardname}")
      depage.get_list opt[:start], opt[:count]
    rescue
      raise get_warning(depage.last_page.body)
    end
  end

  def find(boardname, filename)
    begin
      # http://www.dian.org.cn:81/bbscon?board=Water&file=M.1359670151.A
      url = link_to(:post_page, boardname, filename)

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
      url = "#{@@url[:create_url]}?board=#{boardname}"
      opt = encode_for_bbs(opt)
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
    #begin 
      # get origin post
      url = link_to(:edit_page, boardname, filename)
      res = self.class.get(url)
      orig_post = textarea_of(res.body)

      
      opt[:text] = insert_content_in(orig_post, opt[:text])

      opt[:board] = boardname
      opt[:file] = filename
      opt[:type] = 1

      url = "#{@@url[:update_url]}"

      opt = encode_for_bbs(opt)
      res = self.class.post(url, {body: opt})

      msg = get_warning(res.body)
      if (msg.class == String && (msg.include?('不能') || msg.include?('无权')))
        raise msg
      end

      opt
    #rescue
      #raise get_warning(res.body)
    #end
  end

  def delete(boardname, filename)
    begin
      url = "#{@@url[:delete_url]}?board=#{boardname}&file=#{filename}"
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
    begin
      # http://www.dian.org.cn:81/bbspst?board=Water&file=M.1359670151.A
      url = link_to(:reply_page, boardname, filename)
      page = self.class.get(url)
      opt_orig = form_opt_of(page.body)

      # insert reply text
      opt[:text] ||= ""
      opt[:text] += "\n" + opt_orig[:text]

      opt_orig.merge! opt

      # post
      # http://www.dian.org.cn:81/bbssnd?board=Weather
      url = link_to(:create_url, boardname)
      opt_orig = encode_for_bbs(opt_orig)
      page = self.class.post(url, {body: opt_orig})

      msg = get_warning(page.body)

      unless (msg.class == String) && msg.empty?
        raise msg
      end

      opt_orig

    rescue
      raise get_warning(page.body)
    end
  end

  def cc(boardname, filename, to)
    begin
      url = link_to(:cc_url)

      res = self.class.post(url, {body: {
        board: boardname,
        file: filename,
        target: to
      }})

      msg = get_textcontent(res.body)

      unless msg.class == String && msg.include?('已转')
        raise msg
      end

    rescue
      p msg = get_warning(res.body)
      raise msg
    end
  end

  private

  def link_to(page, boardname=nil, filename=nil)
    url = "#{@@url[page]}"+ (boardname ? "?board=#{boardname}": '')+ 
    (filename ? "&file=#{filename}" : '')
  end

  @@headRex = /((?:.+\n){3}\r?\n)/
  @@tailRex = //

  def insert_content_in(postcontent, content=nil)

    # get head
    postcontent =~ @@headRex
    head = $1


    # get tail
    tail_index = postcontent.rindex("\n--")
    tail = tail_index ? 
      postcontent[tail_index..-1] : ''

    #p postcontent, head, tail

    content ||= ""

    head + content + tail
  end

end
