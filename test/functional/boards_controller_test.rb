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

class BoardControllerTest < FunctionalTestCase
  include BoardsControllerTestHelper

  def setup
    @boardName = "Water"
  end

  def teardown
  end

  def test_get_boards
    boards = get_boards
    assert_equal false, boards.empty?
    assert_equal '2000', boards[0]['name']
    assert_equal 'luxcq', boards[0]['admin']
  end

  #def test_get_20_boards
    #boards = get_boards start: 0, count: 10
    #assert_equal 10, boards.length
  #end

  def test_get_board
    board = get_board(@boardName)
    assert_equal "kidz", board['admin']
    assert_equal "Water", board['name']
  end

end
