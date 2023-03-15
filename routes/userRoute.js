const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.addNewUser);
router.post("/post", userController.addNewPost);

module.exports = router;
