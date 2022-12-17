import Koa from 'koa'
import Router from 'koa-router'
import statics from 'koa-static'
import koaBody from 'koa-body'
import jsonUtil from 'koa-json'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import compose from 'koa-compose'
import path from 'path'

const app = new Koa()
const router = new Router()

const middlewares = compose([
  koaBody(),
  statics(path.join(__dirname, 'public')),
  cors(),
  jsonUtil({ pretty: false, param: 'pretty' }),
  helmet(),
])

router.prefix('/api')

router.get('/', (ctx) => {
  ctx.body = 'Hello World, I\'m /!'
})

router.get('/get', (ctx) => {
  const params = ctx.request.query
  ctx.body = 'Hello World, I\'m get! ' + JSON.stringify(params)
})

router.get('/async', async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World, I\'m async!')
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

app.use(middlewares)

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)