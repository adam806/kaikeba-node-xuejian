const Koa = require("koa");
const app = new Koa();

app.use((ctx, next) => {
    ctx.body = [
        {
            name: "adam"
        }
    ]
    next();

    ctx.body.push({ name: "adam2" })
})

app.use((ctx, next) => {
    ctx.body.push({ name: 'lilith' })
})

app.listen(3000)
