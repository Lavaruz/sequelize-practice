const express = require("express");
const app = express();

const db = require("./models");
const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/", userRoute);

db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("server run at port 3000"));
});
