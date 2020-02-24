
# 序

2020春节对于全中国人民都是一段难忘的时间，突如其来的新冠疫情让今年的年味淡了很多，本该阖家欢乐的时光，很多同胞却逆行去了前线，向这些一线的英雄们致以最崇高的敬意。同时也请英雄们保护好自己，因为你们也是儿女，也是爸妈！

 * 武汉加油！中国加油！

## 吐槽

在疫情影响下，口罩成了最紧俏的物品，很多地方是一罩难求！这个时候BYD站出来改造了一些车间开始生产口罩并计划向车主提供福利，这本是一件好事，可却活脱脱演绎成了一场讨人厌的营销！被广大车主吐槽没有诚意，搞饥饿营销！结果广大车主口罩没抢到却抢了一肚子气！

![rich](https://cache.bydauto.com.cn/attachment/202002/18/102617vajbmnpybyylsomo.png)
        
笔者是一名BYD新能源车主，这两天对BYD小程序 `迪粉汇+` 上兑换口罩的体验那真是酸爽！要拿到这一份BYD的心意，你得满足这2个条件：

- 认证车主
- 积分满`600`

满足了上述2个条件，恭喜你，你就可以在每天的10:00有资格去抢BYD口罩了！但...不要高兴过早，因为距离你能拿到这个口罩还有很远的路！！！ 

首先当你10点打开小程序点击`商城`的时候，发现，呃，怎么一直在转圈圈啊，等无数次重试之后终于你来到了商城，然后`积分兑换`、`商品界面`也会继续让你怀疑人生！这都不算啥，等你费尽千辛万苦终于来到下单界面的时候，`加载收货地址`、`提交订单`才会让你彻底崩溃！ `服务器开小差了`、`服务器繁忙`分分钟让你回到起点！ 是的，从头开始！！！（BYD的程序员小哥哥在request的fail回调里加了逻辑，一旦接口请求失败，就跳转到首页☺）

所以，即使我超级有耐心，即时我电脑和手机2个终端一起刷，还是没有抢到BYD对车主的这份心意！（可能是我姿势不对...）

没有截图，借官方的图一下：

![Demo Page](http://cache.bydauto.com.cn/xxl/202002/22/224909bhphyqlmvy4ozyj4.jpg)

## 决定用知识来改变命运

痛定思痛，就在想怎么通过知识来感受BYD对车主的这份关爱。在小程序上找到商品并下单需要：打开小程序(登录) -> `商城`（商城首页加载） -> `积分兑换`(商品列表页加载) -> `点击商品`(商品页加载) -> `立即兑换`(订单页加载、收货地址加载) -> `提交订单`(后台接收订单并处理) ，这其中只要有一步加载失败，就会回到起点。

有一个取巧的办法就是在服务器没有崩溃的时候进到商品页里，然后把这个页面分享出去，这样直接点这个链接就可以进到商品页，即步骤变为了： `点击商品`(商品页加载) -> `立即兑换`(订单页加载、收货地址加载) -> `提交订单`(后台接收订单并处理) 。可以看到还是有4个调用，在服务器满载的情况下，崩溃的概率还是很高。

分析：

对于指定的产品，其实UI上很多操作只是辅助操作并不是必须的（比如收货地址确认等），如果可以把这些步骤省略，直接到订单提交步骤，那么就可以大大减少崩溃的概率从而提高成功的概率。即：

找到提交订单的接口，分析里面的参数，在本地构造请求体提交下单请求给服务器。
（具体步骤这里不做解释，感兴趣的可以自行度娘。基本逻辑就是抓包分析。）

经过一番摸索，这条路走通了。      

# 要求

- BYD认证车主
- 迪粉汇积分>=600

这是硬性要求，不符合的话是无法提交成功的。

# 行动

在Windows电脑上安装Fiddler并启用对https的捕获，然后安装微信客户端，手机分享小程序给电脑，电脑端打开，陆续点击相关界面，就可以看到相关的请求包。（就是一个个的https请求）

提交订单的请求抓包：

```js     

POST https://weixin54.bydauto.com.cn/forward/?service=Forward.integralMall&serviceDir=api/public/index.php?service=Order.orderCreate HTTP/1.1
Host: weixin54.bydauto.com.cn
Connection: keep-alive
Content-Length: 382
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat
`appkey`: prd
`checksum`: df69d1b8e359115287ff7e2b901af9c94f9d8268
content-type: application/json
`curtime`: 1582462038
`nonce`: nSaQrxefPDhs7aJB
Referer: https://servicewechat.com/wxa28c31d4ff7ae869/222/page-frame.html
Accept-Encoding: gzip, deflate

{"user_name":"微信昵称","product_id":"410","total_price":600,"real_name":"微信昵称","phone":"手机号","accept_name":"收货人","mobile":"手机号","addr":"收货地址","province":"北京","city":"北京","county":"","payable_score":600,"goods_id":"163","goods_nums":1,"seckill":"","redeem_code":"","session_id":"<session_id>"}

```

看到了吧，其实就是把商品信息和收货信息放到一个请求体里发出去。

```json
{
  "user_name": "<你的微信昵称>", 
  "product_id": "410", 
  "total_price": 600, 
  "real_name": "<你的微信昵称>", 
  "phone": "<你的手机号>", 
  "accept_name": "<收货人姓名>", 
  "mobile": "<你的收货手机>", 
  "addr": "<你的收货地址>", 
  "province": "<你的收货省份>", 
  "city": "<你的收货城市>", 
  "county": "", 
  "payable_score": 600, 
  "goods_id": "163", 
  "goods_nums": 1, 
  "seckill": "", 
  "redeem_code": "", 
  "session_id": "session_id"
}
```

通过几个抓包对比分析基本可以推论，服务器通过`appkey`、`checksum`、`curtime`、`nonce`进行重放攻击，通过请求body里的`session_id`来进行用户身份识别。

具体这几个值`appkey`、`checksum`、`curtime`、`nonce`怎么获取可以通过分析js文件得到（需要对小程序进行反编译，感兴趣的自行度娘，这里需要很大的耐心）。(我已经梳理好了，见`src/header.js`)

`session_id`的话了解小程序登录机制的都知道，小程序在login的时候会给服务器传回一个`code`，然后服务器通过`appid`、`app_secret`和`code`来调用微信API获取`session_key`, 然后服务端自己生产一个`session_id`和`sessiong_key`的mapping并把`session_id`返回客户端。（这个`session_id`就是服务自己维护的凭证，通过抓包可以看到迪粉汇小程序的session_id过期时间是7200s）

![wechat miniprogram](https://res.wx.qq.com/wxdoc/dist/assets/img/api-login.2fcc9f35.jpg)

小程序的鉴权机制决定了是无法在小程序外获取到登录凭证的，但登录凭证服务端是要返回给客户端的，所以登录凭证可以通过抓包来看到。

## 说明

此方法没有对BYD小程序造成任何破坏，也没有加大服务器的请求，相反，由于减少了一些不必要的请求，反而减少了对服务器的请求，为服务器减负！

另外，如果你不满足认证车主要求和积分要求，那肯定绝对100%你是下单不成功的。

还有，如果你的口罩够用，就先把资源让给需要的人吧。救人一命，胜造七级浮屠。阿弥陀佛！

## 咋用

需要一定的技术基础，不过觉得会用github的应该都符合这个要求了。

1. 电脑上安装nodejs，我的版本是`v12.11.1`（http://nodejs.cn/download/）
2. 电脑上安装Fiddler，并启用对HTTPS流量的捕获（https://www.telerik.com/download/fiddler），怎么启用自己度娘哈。
3. 电脑上安装微信客户端，登录并打开 迪粉汇+ 小程序, 登录。
4. 在Fiddler上找到`POST https://weixin54.bydauto.com.cn/weixin/mina/?service=mina.decryptCode ` 这个请求，记录返回的 `session_id`（请勿泄露你的`session_id`，这相当于你的用户名密码）(`session_id`有2个小时有效期，把握好这个时间)
5. clone这个仓库，进入到src文件夹，打开命令行，安装依赖项，`npm install http`、`npm install request`、`npm install js-beautify` 如果你运行的时候还提示有module找不到，按照提示自行安装
6. 在 迪粉汇+ 小程序里，`我的` -> `收货地址`, 维护好你的收货地址并记录这些信息
7. 打开index.js，更新`var session_id = "<your session_id got by Fiddler>";` 里面的session_id值， 更新函数 `submit_mask_order` 里你的 `body` 为你的收货地址信息（和6中的一致）(**`重要!重要!!重要!!!`**)
8. 在src目录打开bash（可以使用git-bash（https://github.com/git-for-windows/git/releases/download/v2.25.1.windows.1/Git-2.25.1-64-bit.exe）），运行 `node ./index.js`, 观察返回，如果返回是如下信息，那么恭喜你。如果不是，请重复8.
```json
{
  "ret": 200,
  "data": {
    "success": true,
    "msg": "订单支付成功",
    "data": {
      "order_no": "XXXXXXXXXXXXXXXXXXX"
    },
    "state": 0
  },
  "msg": ""
}

```
