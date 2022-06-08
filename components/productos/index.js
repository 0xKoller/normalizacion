let { Router } = require("express");
let productosController = require("./controllers/productosController");

module.exports = (app) => {
  let router = new Router();
  app.use("/api", router);
  router.get("/", productosController.get);
  router.get("/populate", productosController.populate);
  router.get("/:id", productosController.get);
};
