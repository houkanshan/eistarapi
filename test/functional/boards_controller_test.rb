require_relative "../test_helper"

module BoardsControllerTestHelper
  def get_boards(opt = {})
    get "/boards", opt
    get_json(last_response)
  end

  def get_board(boardname)
    get "/boards/#{boardname}"
    get_json(last_response)
  end

end

class BoardControllerTest
  include BoardsControllerTestHelper

  def setup
    @boardName = "Water"
  end

  def teardown
  end

  def test_get_boards
    boards = get_boards
    assert_equal false, boards.empty?
  end

  def test_get_20_boards
    boards = get_boards start: 0, count: 10
    assert_equal 10, boards.length
  end

  def test_get_boards_info
    board = get_board(@boardName)
    assert_equal "kidz", board.admin
    assert_equal true, board.count > 12151
  end

end
