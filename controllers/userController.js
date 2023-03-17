const { User, Post, FollowerFollowing } = require("../models");

User.belongsToMany(User, {
  as: "follower",
  foreignKey: "followerId",
  through: FollowerFollowing,
});
User.belongsToMany(User, {
  as: "following",
  foreignKey: "followingId",
  through: FollowerFollowing,
});

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

async function addUser(req, res, next) {
  const post1 = await User.findOne({
    where: {
      name: "Kodin",
    },
  });
  const post2 = await User.findOne({
    where: {
      name: "Budi",
    },
  });
  post1.addFollower(post2);
  post2.addFollowing(post1);
  res.send(post1);
}

async function getUsers(req, res, next) {
  const post = await User.findAll({
    include: { all: true },
  });
  res.send(post);
}
async function getPosts(req, res, next) {
  const post = await Post.findAll();
  res.send(post);
}

module.exports = {
  addNewUser,
  addNewPost,
  getPosts,
  getUsers,
  addUser,
};
