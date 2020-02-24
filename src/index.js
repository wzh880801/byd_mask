
var http = require('https');
const js_beautify = require("js-beautify");
var u = require('./util');

// input your session_id here
var session_id = "<your session_id got by Fiddler>";

function get_order_list() {
    var h = u.getHeader();
    var _body = JSON.stringify({ "session_id": session_id })

    var _options = {
        host: 'weixin54.bydauto.com.cn',
        path: '/forward/?service=Forward.integralMall&serviceDir=api/public/index.php?service=Order.getOrderListById',
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat',
            'Content-Length': _body.length,
            'appkey': h.Appkey,
            'checksum': h.Checksum,
            'content-type': 'application/json',
            'curtime': h.Curtime,
            'nonce': h.Nonce,
            'Referer': 'https://servicewechat.com/wxa28c31d4ff7ae869/222/page-frame.html'
        }
    };

    var req = http.request(_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            str = unescape(data.replace(/\\/g, "%"));
            console.log(beautify_js(str));
        });
    });

    req.write(_body);
    req.end();
}

// export NODE_TLS_REJECT_UNAUTHORIZED=1
/**
 * 提交认证车主订购口罩订单
 * 1. 需要已经是认证车主
 * 2. 需要积分>=600
 */
function submit_mask_order() {

    var req = require('request');
    req.post('https://weixin54.bydauto.com.cn/forward/?service=Forward.integralMall&serviceDir=api/public/index.php?service=Order.orderCreate', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat',
            'appkey': h.Appkey,
            'checksum': h.Checksum,
            'content-type': 'application/json',
            'curtime': h.Curtime,
            'nonce': h.Nonce,
            'Referer': 'https://servicewechat.com/wxa28c31d4ff7ae869/222/page-frame.html'
        },
        body: JSON.stringify({
            "user_name": "<你的微信昵称>",
            "product_id": "410",
            "total_price": 600,
            "real_name": "<你的微信昵称>",
            "phone": "<你的收货手机>",
            "accept_name": "<收货人姓名>",
            "mobile": "<你的手机号>",
            "addr": "<你的收货地址>",
            "province": "<你的收货省份>",
            "city": "<你的收货城市>",
            "county": "",
            "payable_score": 600,
            "goods_id": "163",
            "goods_nums": 1,
            "seckill": "",
            "redeem_code": "",
            "session_id": session_id
        }),
        // proxy: 'http://127.0.0.1:8888'
    }, function (error, res, body) {
        //callback
        // console.log(res);
        if (error)
            console.log(error);
        else if (body)
            console.log(beautify_js(unescape(body.replace(/\\/g, "%"))))
    });
}

function get_goods_detail() {

    var h = u.getHeader();
    var _body = JSON.stringify({ "id": 163, "attr_id": "", "session_id": session_id })

    var _options = {
        host: 'weixin54.bydauto.com.cn',
        path: '/forward/?service=Forward.integralMall&serviceDir=api/public/index.php?service=Goods.goodsDetail',
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat',
            'Content-Length': _body.length,
            'appkey': h.Appkey,
            'checksum': h.Checksum,
            'content-type': 'application/json',
            'curtime': h.Curtime,
            'nonce': h.Nonce,
            'Referer': 'https://servicewechat.com/wxa28c31d4ff7ae869/222/page-frame.html'
        }
    };

    var req = http.request(_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            str = data.replace(/\\/g, "%");
            console.log(beautify_js(unescape(str)));
        });
    });

    req.write(_body);
    req.end();
}

function beautify_js(str){
    return js_beautify(str, { indent_size: 2, space_in_empty_paren: true });
}

var h = u.getHeader();
console.log(h);

// get_order_list();

// get_goods_detail();

submit_mask_order();