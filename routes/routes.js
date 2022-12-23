import combineRoutes from 'koa-combine-routers'

import demoRoutes from './demoRouter'

export default combineRoutes(
  demoRoutes,
)