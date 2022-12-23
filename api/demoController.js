class DemoController {
  constructor() {
  }
  async demo(ctx) {
    ctx.body = {
      msg: 'Hello World!'
    }
  }
}

export default new DemoController()