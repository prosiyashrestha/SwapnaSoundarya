const router = require("express").Router();
const UserController = require("../controllers/userControllers");

router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/getSingleUser/:id", UserController.getSingleUser);
router.post("/changepassword", UserController.changePassword);

module.exports = router;
