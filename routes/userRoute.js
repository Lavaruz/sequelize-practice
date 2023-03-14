const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.addNewUser);

module.exports = router;
