// const express = require("express");
// 手写模仿express
const express = require("./kpress");
const app = express();
app.get("/", (req, res) => {
    res.end("hello world-express");
})
app.get("/users", (req, res) => {
    res.end(JSON.stringify([{ name: "tom", age: 20 }]))
})

//下面会防止当node服务报错时候不会导致服务直接停止影响到其他接口请求
process.on()

app.listen(3002, () => {
    console.log("Example app listen at 3002");
})