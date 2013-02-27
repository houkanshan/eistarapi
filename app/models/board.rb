class Board < Resource

  host = settings.api['host']
  @@url = {
    boards_list: "#{host}/bbsall",
    board_page: "#{host}/bbsdoc",
    board_note: "#{host}/bbsnot"
  }

  def find(boardname)
    begin
      # http://www.dian.org.cn:81/bbsdoc?board=Water
      board_page = self.class.get("#{@@url[:board_page]}?board=#{boardname}")
      info = get_board_info(board_page.body)
      info[:name] = boardname

      # http://www.dian.org.cn:81/bbsnot?board=Water
      note_page = self.class.get("#{@@url[:board_note]}?board=#{boardname}")
      info[:note] = get_board_note(note_page.body)

      info
    rescue
      raise get_warning(board_page.body)
    end
  end


  def all
    begin 
      # http://www.dian.org.cn:81/bbsall
      boards_list = self.class.get("#{@@url[:boards_list]}")
      get_boards_list(boards_list)
    rescue
      raise get_warning(boards_list.body)
    end
  end

end

