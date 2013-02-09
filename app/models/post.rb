class Post < Resource
  host = settings.api['host']
  URL = {
    board_page: "#{host}/bbsdoc",
    post_page: "#{host}/bbscon",
    reply_url: "#{host}/bbspst",
    edit_url: "#{host}/bbsedit",
    delete_url: "#{host}/bbsdel",
    cc_url: "#{host}/bbsccc"
  }

  def list(boardname, opt = {start: 0, count: 20})
    #begin

      @boardname = boardname
      get_list opt[:start], opt[:count]

    #rescue
      #raise get_warning(@last_page.body)
    #end
  end

  def find(boardname, filename)
    @boardname = boardname
    @filename = filename
    begin
      # http://www.dian.org.cn:81/bbscon?board=Water&file=M.1359670151.A
    rescue
    end
  end

  def reply(boardname, filename)
    begin
      # http://www.dian.org.cn:81/bbspst?board=Water&file=M.1359670151.A
    rescue
    end
  end

  def cc(boardname, filename, to)
    begin
    rescue
    end
  end

  private
  # point : start, start+count, e.q. 0, 20
  # index : node.index, e.q.12152
  def get_list(start = 0, count = 20)

    fetched_list = get_a_page

    @last_index = @cur_start_index
    @count_per_page = fetched_list.length
    @cur_page = 0

    list = []

    start_index = get_index_by_point(start)
    end_index = get_index_by_point(start+count)

    start_page, start_step = get_page_by_point(start)
    end_page, end_step  = get_page_by_point(start+count)

    #p "start_index: #{start_index}"
    #p "end_index: #{end_index}"
    #p "start_page: #{start_page}"
    #p "end_page: #{end_page}"

    # jump to start page
    if @cur_page < start_page
      fetched_list = get_a_page(start_index)
      @cur_page = start_page
    end

    # get the requested long list (before croped)
    while @cur_page < end_page
      fetched_list += get_a_page(@cur_start_index - 2*@count_per_page)
      @cur_page += 1
    end

    # crop the list
    fetched_list[start_step...start_step+count]
  end
  
  def get_page_by_point(point)
    [point / @count_per_page, point % @count_per_page]
  end

  def get_index_by_point(point)
    @last_index - point
  end

  def get_a_page(start = nil)
    start &&= "&start=#{start}"

    # http://www.dian.org.cn:81/bbsdoc?board=Water
    url = "#{URL[:board_page]}?board=#{@boardname}#{start}"
    @last_page = self.class.get(url)
    posts = get_posts_list(@last_page.body)

    # set status
    @cur_start_index = Integer(posts[0][:index])

    posts
  end

end
