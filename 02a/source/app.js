const Kkb = require("./kkb")
const app = new Kkb();
// app.use((req, res) => {
//     res.writeHead(200);
//     res.end("hello")
// })

app.use((ctx, next) => {
    ctx.body = [{
        name: "kkb版koa"
    }]
})
app.listen(3000)