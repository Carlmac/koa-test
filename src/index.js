const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()

router.prefix('/api')

router.get('/', (ctx) => {
  ctx.body = 'Hello World, again!'
})

router.get('/get', (ctx) => {
  const params = ctx.request.query
  ctx.body = 'Hello Api!!'
})

router.get('/async', async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World 2s later!!')
    }, 2000)
  })
  ctx.body = result
})

router.post('/post', async (ctx) => {
  let { body } = ctx.request
  ctx.body = {
    ...body,
  }
})

app.use(koaBody())
app.use(cors())

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)