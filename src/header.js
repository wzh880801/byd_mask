var r = require("./sha1");

function e(e) {
    e = e || 32;
    for (var r = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        t = r.length,
        a = "",
        n = 0; n < e; n++) a += r.charAt(Math.floor(Math.random() * t));
    return a
}

exports.createNonceStr = e,
    exports.default = function (t) {
        var a = t.appKey,
            n = t.appSecret;
        return function () {
            var t = e(16),
                o = parseInt((new Date).getTime() / 1e3).toString(),
                s = r.hex_sha1(n + t + o),
                u = {};
            return u.Appkey = a,
                u.Nonce = t,
                u.Curtime = o,
                u.Checksum = s.toLowerCase(),
                u
        }
    };