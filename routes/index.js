// let userApi = require("../components/users");
let productosApi = require("../components/productos");
module.exports = (app) => {
  productosApi(app);
  // userApi(app);
};
