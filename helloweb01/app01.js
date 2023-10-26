var http = require("http");

// 요청 handler
var server = http.createServer(function (req, resp) {
  resp.writeHead(200, {
    "Content-Type": "text/html",
  });
  resp.end("<h1>Hello World</h1>");
});

// 서버 실행
server.listen(9090, function () {
  console.log("server starts...[9090]");
});
