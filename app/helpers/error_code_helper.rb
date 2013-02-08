ERROR_MAP = {
  login_error: {code: 100, msg: 'login error'},
  session_timeout: {code: 101, msg: 'session timeout, try re-login'},
  logout_error: {code: 102, msg: 'logout error'},
  server_error: {code: 103, msg: 'server error, try later'},
  no_board: {code: 104, msg: 'board name error'}
}

#module ErrorCodeHelper
helpers do
  def error_res(type)
    ERROR_MAP[type]
  end
end
#end

