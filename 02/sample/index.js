const Koa = require("koa");
const app = new Koa();
//每一个use都是中间件  

app.use((ctx, next) => {
  ctx.body = [
    { name: "tom" }
  ]

  //next 表示使用下一个中间件 
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