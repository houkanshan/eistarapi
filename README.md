eistarapi
=========

provide api for eistar bbs.

实际上这仅仅是个代理，所有数据从 http://www.dian.org.cn:81 获取，服务器无数据库，因此不会保存任何用户数据~

注意，权限与论坛一致，隐藏板块只有用具有权限的帐号登录才可见。

Powered by Ruby, Sinatra, Nokogiri, httparty


API Document
=========

## Session

用户登录通过创建session进行，使用正确的用户名密码创建一个session成功，即为登录成功。
服务器会在返回的HTTP头中设置set-cookies字段，或者你也可以利用返回结果手动设置你下次请求的cookie。


删除session即为登出，当然实际上eistar的服务器上应该并没有销毁登录，它只会通过session的超时来销毁。


### create a session (i.e. login)

创建一个session，即登录

```
POST /sessions
```
或者：
```
POST /login
```

#### request body
```json
{
  "username": "houkanshan",
  "password": "passwordxxx"
}
```

#### response body
```json
{
  "set_cookie": {
    "utmpkey": 1111111,
    "utmpnum": 2,
    "utmpuserid": "houkanshan"
  }
}
```

### delete a session (i.e. logout)

删除当前session，即登出
```
DELETE /sessions
```
或者
```
POST /logout
```

#### response body
```json
{
  "set_cookie" {
    "utmpkey": "",
    "utmpnum": "",
    "utmpuserid": ""
  }
}
```

## User

用户接口主要提供用户信息

### get a user's info

获取某用户信息

```
GET /users/:id
```

#### response body
```json
{
    "id": "houks",
    "name": "呵呵",
    "login_count": "1207",
    "post_count": "372",
    "constellation": "天蝎座",
    "last_login": {
        "time": "Wed Feb 27 13:28:49 2013",
        "from": "192.168.7.89"
    },
    "exp": {
        "num": "2100",
        "title": "老站友"
    },
    "hp": {
        "num": "179"
    },
    "perf": {
        "num": "18",
        "title": "还不错"
    }
}
```

## Board

BBS 版块接口

### get boards list

获取所有可见版块

```
GET /boards
```

#### response body
```json
[
    {
        "name": "Weather",
        "category": "生活",
        "title": "天气预报",
        "admin": "SYSOPs"
    },
    {
        "name": "Wishes",
        "category": "交流",
        "title": "温馨祝福",
        "admin": "STONE"
    }
]
```

### get a board's info

获取某版块信息

```
GET /boards/:boardname
```

#### response body
```json
{
    "title": "Weather(天气预报)",
    "admin": "SYSOPs",
    "name": "Weather",
    "note": ""
}
```


## Topic 

版块在主题模式下的内容

### get topics list

获取某版块的主题列表

```
GET /boards/:boardname/topics
```
#### request body

可选参数，默认为start=0, count=20

```javascript
{
  "start": 0,  // optional, default 0
  "count": 2, // optional, default 20
}
```

#### response body
```json
[
    {
        "filename": "M.1355479789.A",
        "index": "1",
        "author": {
            "id": "warren"
        },
        "date": "Dec 14 18:09",
        "title": "好冷，这是要下雪的节奏吗"
    },
    {
        "filename": "M.1347623570.A",
        "index": "2",
        "author": {
            "id": "candycao"
        },
        "date": "Sep 14 19:52",
        "title": "武汉温差"
    }
]
```

### get a topic

获取某个主题的内容，主题通过 boardname + filename 索引（bbs实际上是通过文件来存储帖子）
```
GET /boards/:boardname/topics/:filename
```

#### response body
```json
[
    {
        "author": {
            "id": "warren",
            "name": "warren"
        },
        "border": "Weather",
        "title": "好冷，这是要下雪的节奏吗",
        "date": "2012年12月14日18:09:48 星期五",
        "filename": "M.1355479789.A",
        "text": "xxxx",
        "from": "xxx.xxx.xxx.xxx"
    }
]

```

## Post

版块在帖子模式下的内容，以及对单个帖子的相关功能

### get posts list
```
GET /boards/:boardname/posts
```
#### request body

可选参数，默认为start=0, count=20

```javascirpt
{
  "start": 0,  // optional, default 0
  "count": 2, // optional, default 20
}
```

#### response body
```json
[
    {
        "filename": "M.1361195402.A",
        "index": "1811",
        "author": {
            "id": "houks"
        },
        "date": "Feb 18 21:50",
        "title": "Re: 该穿中袖了么~",
        "size": "16"
    },
    {
        "filename": "M.1361193048.A",
        "index": "1810",
        "author": {
            "id": "houks"
        },
        "date": "Feb 18 21:10",
        "title": "Re: test",
        "size": "22"
    }
]
```

### get a post

获取某个帖子的内容

```
GET /boards/:boardname/posts/:filename
```
#### response body
```json
{
    "author": {
        "id": "houks",
        "name": "呵呵"
    },
    "border": "Weather",
    "title": "Re: test",
    "date": "Mon Feb 18 21:10:48 2013",
    "filename": "M.1361193048.A",
    "text": "xxx",
    "from": "xxx.xx.xx.xx"
}
```
### create a post

创建一个帖子

```
POST /boards/:boardname/posts
```

#### request body

title参数必需，text参数可选

```javascript
{
  "title": "test_title",
  "text": "test_content"   // optional, default ''
}
```

#### response body

```json
{
    "author": {
        "id": "houks",
        "name": "呵呵"
    },
    "border": "Weather",
    "title": "test_title",
    "date": "Wed Feb 27 14:26:56 2013",
    "filename": "M.1361946416.A",
    "text": "xxx",
    "from": "x.x.x.x"
}
```

### edit a post

编辑帖子
```
PUT /boards/:boardname/posts/:filename
```

#### request body
```json
{
  "text": "change you~!"
}
```


### delete a post

删除帖子
```
DELETE /boards/:boardname/posts/:filename
```

#### response body
```json
{
    "code": 100,
    "msg": "successed ~",
    "detail": "删除成功."
}
```

### reply a post

回复帖子
```
POST /boards/:boardname/posts/:filename/reply
```

#### request body
```json
{
  "text": "this is a reply ~"
}
```

#### response body
```json
{
    "author": {
        "id": "houks",
        "name": "呵呵"
    },
    "border": "Weather",
    "title": "Re: test_title",
    "date": "Wed Feb 27 14:30:56 2013",
    "filename": "M.13619464123.A",
    "text": "xxx",
    "from": "x.x.x.x"
}
```


### cc a post

转发帖子
```
POST /boards/:boardname/posts/:filename/cc
```
#### request body

to为被转发到的版块
```json
{
  "to": "Water"
}
```

#### response body
```json
{
    "author": {
        "id": "houks",
        "name": "呵呵"
    },
    "border": "Weather",
    "title": "[转载] Re: 该穿中袖了么~",
    "date": "Wed Feb 27 14:37:15 2013",
    "filename": "M.1361947035.A",
    "text": "【 以下文字转载自 Weather 讨论区 】\n【 原文由 candycao 所发表 】xxx",
    "from": "x.x.x.x"
}
```

