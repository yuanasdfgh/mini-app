const requireDirectory = require("require-directory");
const Router = require("koa-router");
class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app;
    InitManager.initLoadRouters();
  }
  static initLoadRouters() {
    const apiDierectory = `${process.cwd()}/app/api`;
    requireDirectory(module, apiDierectory, { visit: whenLoadModule });
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
  }
}
module.exports = InitManager;
