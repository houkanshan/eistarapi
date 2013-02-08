class Board < Resource

  host = settings.api['host']
  URL = {
    boards_list: "#{host}/bbsall",
    board_page: "#{host}/bbsdoc",
    board_note: "#{host}/bbsnot"
  }

  def find(boardname)
    # http://www.dian.org.cn:81/bbsdoc?board=Water
    board_page = self.class.get("#{URL[:board_page]}?board=#{boardname}")
    info = get_board_info(board_page.body)

    # http://www.dian.org.cn:81/bbsnot?board=Water
    note_page = self.class.get("#{URL[:board_note]}?board=#{boardname}")
    info[:note] = get_board_note(note_page.body)
    info[:name] = boardname

    info
  end


  def all
    # http://www.dian.org.cn:81/bbsall
    boards_list = self.class.get("#{URL[:boards_list]}")
    get_boards_list(boards_list)
  end

end

