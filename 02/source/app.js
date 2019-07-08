const KKb = require("./kkb")
const app = new KKb();
// app.use((req, res) => {
//   res.writeHead(200)
//   res.end("hi kkb")
// })

app.use(ctx => {
  ctx.body = "haha..."
})

app.listen(3000)  