require_relative "../test_helper"

class UserTest < TestCase
  def test_find_user
    user = User.new
    usr = user.find('houks')

    assert_equal usr[:id] , 'houks'
  end
end

