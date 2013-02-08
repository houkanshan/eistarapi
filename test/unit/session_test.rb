require_relative "../test_helper"

class SessionTest < TestCase
  def test_create_session 
    @session = Session.new('forapia', '1111')
    assert_equal false, @session.cookie.empty?
  end

  def test_destroy_session
    @session = Session.new('forapib', '1111')
    @session.destroy
  end

end

