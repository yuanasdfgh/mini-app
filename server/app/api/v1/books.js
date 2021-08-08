const Router = require("koa-router");

const router = new Router();

router.get('/v1/:id/list', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.quert
  const body = ctx.request.body
 console.log(ctx);
  ctx.body = {
    name: "哈哈哈gjdf12",
  };
});

module.exports = router;
