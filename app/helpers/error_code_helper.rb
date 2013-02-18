ERROR_MAP = {
  success: {code: 100, msg: 'successed ~'},
  login_error: {code: 101, msg: 'login error'},
  session_timeout: {code: 102, msg: 'session timeout, try re-login'},
  logout_error: {code: 103, msg: 'logout error'},
  server_error: {code: 104, msg: 'server error, try later'},
  no_board: {code: 105, msg: 'board name error'},
  create_failed: {code: 106, msg: 'create post error'},
  update_failed: {code: 107, msg: 'edit post error'},
  cc_failed: {code: 108, msg: 'cc failed'},
  no_user: {code: 109, msg: 'user not found'}
}

#module ErrorCodeHelper
helpers do
  def error_res(type)
    ERROR_MAP[type]
  end
end
#end

