let productosService = require("../services/productosServices");
class Productos {
  async populate(req, res, next) {
    try {
      let { cant } = req.query;
      res.json(await productosService.populate(cant));
    } catch (error) {
      console.log(error);
    }
  }
  async get(req, res, next) {
    try {
      let { id } = req.params;
      if (!id) id = null;
      res.json(await productosService.get(id));
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new Productos();
