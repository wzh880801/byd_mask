
var http = require('http');
var u = require('./util');

var server = http.createServer(function (req, res) {
    console.log(req.method + ' ' + req.url);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var h = u.getHeader();
    res.write(JSON.stringify({
        'appkey': h.Appkey,
        'checksum': h.Checksum,
        'curtime': h.Curtime,
        'nonce': h.Nonce,
    }));
    res.end();
});

process.on('uncaughtException', function (err) {
    console.log(err);
});

server.listen(3000, function () {
    console.log('http server started. listenning on 3000');
});