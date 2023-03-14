module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
  });
  return User;
};
