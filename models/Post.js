module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Post;
};
