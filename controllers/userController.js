const { User, Post } = require("../models");

// 002
User.hasMany(Post);
Post.belongsTo(User);

async function addNewUser(req, res, next) {
  const { name, password } = req.body;
  const newUser = await User.create({
    name: name,
    password: password,
  });

  res.send(newUser);
}

async function addNewPost(req, res, next) {
  let { author, title } = req.body;
  const user = await User.findOne({
    where: {
      name: author,
    },
  });
  const post = await Post.create({
    title: title,
  });
  user.addPost(post);
  res.send(post);
}

async function getUsers(req, res, next) {
  const post = await User.findAll({
    include: Post,
  });
  res.send(post);
}
async function getPosts(req, res, next) {
  const post = await Post.findAll({
    include: User,
  });
  res.send(post);
}

module.exports = {
  addNewUser,
  addNewPost,
  getPosts,
  getUsers,
};
