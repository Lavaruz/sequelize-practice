const { User } = require("../models");

async function addNewUser(req, res, next) {
  User.create({
    name: "Assami Muzaki",
    password: "qwe",
  }).catch((err) => {
    console.log(err);
  });
  res.send("insert new user");
}

module.exports = {
  addNewUser,
};
