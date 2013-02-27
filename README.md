eistarapi
=========

provide api for eistar bbs.

实际上这仅仅是个代理，所有数据从 http://www.dian.org.cn:81 获取，服务器无数据库，
所以也不保存任何用户数据。

Powered by Ruby, Sinatra, Nokogiri, httparty


API Document
=========

## session

### create a session (e.q. login)

```
POST /session
```

#### input
```
{
  "username": "houkanshan",
  "password": "passwordxxx"
}
```

#### response
```
{
  "set_cookie": {
    "utmpkey": 1111111,
    "utmpnum": 2,
    "utmpuserid": "houkanshan"
  }
}
```

### delete a session (e.q. logout)

```
DELETE /session
```

#### input


#### response
```
{
  "set_cookie" {
    "utmpkey": "",
    "utmpnum": "",
    "utmpuserid": ""
  }
}
```

