// 引入koa
const Koa = require("koa");
const parser = require("koa-bodyparser")
const InitManager = require("./core/init.js");
const app = new Koa();

InitManager.initCore(app);

app.use(parser())

app.listen(3000, function () {
  console.log("监听3000端口");
});
