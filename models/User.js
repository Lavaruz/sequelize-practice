module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};
