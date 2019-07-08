const Koa = require("koa");
const app = new Koa();
app.use((ctx, next) => {
  ctx.body = [
    { name: "tom" }
  ]
  next()

  ctx.body.push({
    name: "abc"
  })
})
app.use((ctx, next) => {
  ctx.body.push({
    name: "jerry"
  })
})
app.listen(3000)