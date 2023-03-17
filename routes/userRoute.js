const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.addNewUser);
router.post("/add", userController.addUser);
router.get("/", userController.getUsers);
router.post("/post", userController.addNewPost);
router.get("/post", userController.getPosts);

module.exports = router;
