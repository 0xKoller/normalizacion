let faker = require("faker");
faker.locale = "es";

class User {
  static users = [];
  async populate(cant = 50) {
    try {
      for (let index = 0; index < cant; index++) {
        User.users.push({
          id: index + 1,
          nombre: faker.name.firstName(),
          apellido: faker.name.lastName(),
          color: faker.internet.color(),
        });
      }
      return User.users;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id = null) {
    try {
      return id ? User.users.filter((obj) => obj.id == id) : User.users;
    } catch (error) {
      console.log(error);
    }
  }

  async create(obj) {
    try {
      User.users.push({ id: User.users.length + 1, ...obj });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, obj) {
    try {
      User.users = User.users.map((user) => {
        if (user.id == id) {
          user = { id, ...obj };
        }
        return user;
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      return id ? User.users.filter((obj) => obj.id !== id) : User.users;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new User();
