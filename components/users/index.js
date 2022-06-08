let { Router } = require("express");
let userController = require("./controllers/userController");

module.exports = (app) => {
  let router = new Router();

  app.use("/users", router);
  router.get("/", userController.get);
  router.get("/populate", userController.populate);
  router.get("/:id", userController.get);
  router.post("/", userController.create);
  router.put("/:id", userController.update);
  router.delete("/:id", userController.delete);
};
