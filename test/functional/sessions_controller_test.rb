require_relative "../test_helper"
class SessionControllerTest < FunctionalTestCase
  def setup
  end

  def test_login_error
    post '/sessions', :username => 'orapi', :password => '1111'
    assert_equal 403, last_response.status
  end

  def test_logout_error
    delete '/sessions'
    assert_equal 400, last_response.status
  end

  def test_login_and_logout
    post '/sessions', :username => 'forapie', :password => '1111'
    assert_equal 200, last_response.status
    
    get '/sessions'
    assert_equal true, get_json(last_response)["logined"]

    delete '/sessions'
    assert_equal true, last_response.ok?

    get '/sessions'
    assert_equal false, get_json(last_response)["logined"]
  end

end

