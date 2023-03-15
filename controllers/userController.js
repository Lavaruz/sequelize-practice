const { User, Post } = require("../models");
Post.hasOne(User);
User.belongsTo(Post);

async function addNewUser(req, res, next) {
  User.create({
    name: "Assami Muzaki",
    password: "qwe",
  }).catch((err) => {
    console.log(err);
  });
  res.send("insert new user");
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
  post.setUser(user);
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
};
