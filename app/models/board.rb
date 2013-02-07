class Board < Resource

  host = settings.api['host']
  URL = {
    boards: "#{host}/bbsall",
    board: "#{host}/bbsdoc"
  }

  def self.get
    
  end

  def find(boardname)
    res = self.class.get(URL[:board], { cookies: @cookies })
  end

  def initialize(cookies)
    @cookies = cookies
  end

end

