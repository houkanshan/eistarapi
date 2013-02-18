require_relative "../test_helper"

module UsersControllerTestHelper
  def get_user(id)
    get "/users/#{id}"
    get_json(last_response)
  end
end

class UserControllerTest < FunctionalTestCase
  include UsersControllerTestHelper

  def setup
  end

  def test_get_usr_info
    usr = get_user('houks')
    assert_equal usr["id"], 'houks'
  end

  def test_get_unknow_user
    usr = get_user('xxxxxxxxxxxxxxxxxxx')
    assert_equal 404, last_response.status
  end

end
