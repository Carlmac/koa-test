import Koa from 'koa'
import statics from 'koa-static'
import koaBody from 'koa-body'
import jsonUtil from 'koa-json'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import compose from 'koa-compose'
import path from 'path'
import router from '../routes/routes'
import compress from 'koa-compress'

const app = new Koa()

const isProdMode = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod'

if (isProdMode) {
  app.use(compress())
}

const middlewares = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonUtil({ pretty: false, param: 'pretty' }),
  helmet(),
])

app.use(middlewares)
  .use(router())

app.listen(3000)