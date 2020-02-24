"use strict";
var e = require("./header"),
    t = function (e) {
        return e;
    }(e),
    n = "https://weixin54.bydauto.com.cn",
    o = {
        appKey: "prd",
        appSecret: "RFAU4x3nE^*m"
    },
    r = require("./cryptojs").Crypto,
    s = t.default(o);

module.exports = {

    getHeader: s,
    getSession: '',

    getNowFormatDate: function () {
        var e = new Date,
            t = e.getMonth() + 1,
            a = e.getDate();
        t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a);
        var n = e.getHours();
        n >= 0 && n <= 9 && (n = "0" + n);
        var o = e.getMinutes(); o >= 0 && o <= 9 && (o = "0" + o); var r = e.getSeconds(); return r >= 0 && r <= 9 && (r = "0" + r), e.getFullYear() + "-" + t + "-" + a + " " + n + ":" + o + ":" + r
    },
    Encrypt: function (e) {
        var t = new r.mode.CBC(r.pad.pkcs7),
            a = r.charenc.UTF8.stringToBytes(e),
            n = r.charenc.UTF8.stringToBytes("1234567812345678"),
            o = r.charenc.UTF8.stringToBytes("8765432187654321");
        return r.AES.encrypt(a, n, { iv: o, mode: t, asBpytes: !0 })
    },
    formatNum: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = "", a = 0; if (-1 == (e = e.toString()).indexOf(".")) for (n = e.length - 1; n >= 0; n--)t = a % 3 == 0 && 0 != a ? e.charAt(n) + "," + t : e.charAt(n) + t, a++; else { for (var n = e.indexOf(".") - 1; n >= 0; n--)t = a % 3 == 0 && 0 != a ? e.charAt(n) + "," + t : e.charAt(n) + t, a++; t += (e + "00").substr((e + "00").indexOf("."), 3) }
        return t
    },
    createNonceStr: e.createNonceStr
};
