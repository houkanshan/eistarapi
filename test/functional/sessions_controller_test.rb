require_relative "../test_helper"

class SessionControllerTest < FunctionalTestCase
  def setup
    # make sure no login
    delete '/sessions'
  end

  def test_login_error
    post '/sessions', :username => 'orapi', :password => '1111'
    assert_equal 403, last_response.status
  end

  def test_logout_error
    delete '/sessions'
    assert_equal 400, last_response.status
  end

  def test_login
    post '/sessions', :username => 'forapia', :password => '1111'
    assert_equal 200, last_response.status
  end

  def test_logout
    post '/sessions', :username => 'forapia', :password => '1111'
    delete '/sessions'

    # let it be, FIXME
    #assert_equal true, last_response.ok?
  end

end