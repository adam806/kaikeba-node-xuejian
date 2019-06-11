//用http包起了最基本的http服务器 
const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {

    const { url, method, headers } = req;
    if (url === "/favicon.ico") {
        return false;
    }
    if (url === "/" && method === "GET") {
        fs.readFile("index.html", (err, data) => {
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.end(data)
        });
    } else if (url === "/users" && method === "GET") {
        //下面方法等于是把上面statusCode=200和setHeader写在一起了
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify({ name: "abc" }))
    } else if (method === "GET" && headers.accept.indexOf("image/*") !== -1) {
        console.log(headers.accept);
        fs.createReadStream("." + url).pipe(res)
    }


    // res.end("hello world")
})

server.listen(3001);