const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json;charset=UTF-8" })

    res.end('{name:"http 原生返回",name:"http default"}');
})
server.listen(3002)