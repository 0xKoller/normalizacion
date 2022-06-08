let faker = require("faker");
faker.locale = "es";

class Productos {
  static productos = [];
  async populate(cant = 5) {
    try {
      for (let index = 0; index < cant; index++) {
        Productos.productos.push({
          id: index + 1,
          name: faker.commerce.product(),
          photo: faker.image.food(),
          price: faker.commerce.price(10, 500, 2, "$"),
        });
      }
      return Productos.productos;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id = null) {
    try {
      return id
        ? Productos.productos.filter((obj) => obj.id == id)
        : Productos.productos;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new Productos();
