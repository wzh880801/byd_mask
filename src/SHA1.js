
"use strict";
function r(r) {
	return c(n(o(r), r.length * h))
}
function n(r, n) {
	r[n >> 5] |= 128 << 24 - n % 32,
	r[15 + (n + 64 >> 9 << 4)] = n;
	for (var o = Array(80), c = 1732584193, f = -271733879, h = -1732584194, i = 271733878, v = -1009589776, A = 0; A < r.length; A += 16) {
		for (var l = c,
		g = f,
		s = h,
		d = i,
		y = v,
		x = 0; x < 80; x++) {
			o[x] = x < 16 ? r[A + x] : a(o[x - 3] ^ o[x - 8] ^ o[x - 14] ^ o[x - 16], 1);
			var C = u(u(a(c, 5), t(x, f, h, i)), u(u(v, o[x]), e(x)));
			v = i,
			i = h,
			h = a(f, 30),
			f = c,
			c = C
		}
		c = u(c, l),
		f = u(f, g),
		h = u(h, s),
		i = u(i, d),
		v = u(v, y)
	}
	return Array(c, f, h, i, v)
}
function t(r, n, t, e) {
	return r < 20 ? n & t | ~n & e: r < 40 ? n ^ t ^ e: r < 60 ? n & t | n & e | t & e: n ^ t ^ e
}
function e(r) {
	return r < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514
}
function u(r, n) {
	var t = (65535 & r) + (65535 & n);
	return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
}
function a(r, n) {
	return r << n | r >>> 32 - n
}
function o(r) {
	for (var n = Array(), t = (1 << h) - 1, e = 0; e < r.length * h; e += h) n[e >> 5] |= (r.charCodeAt(e / h) & t) << 24 - e % 32;
	return n
}
function c(r) {
	for (var n = f ? "0123456789ABCDEF": "0123456789abcdef", t = "", e = 0; e < 4 * r.length; e++) t += n.charAt(r[e >> 2] >> 8 * (3 - e % 4) + 4 & 15) + n.charAt(r[e >> 2] >> 8 * (3 - e % 4) & 15);
	return t
}
var f = 0,
h = 8;
module.exports = {
	hex_sha1: r
};