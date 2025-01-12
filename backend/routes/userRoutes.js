const router = require("express").Router();
const UserController = require("../controllers/userControllers");

router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/getSingleUser/:id", UserController.getSingleUser);
router.post("/changepassword", UserController.changePassword);
router.delete("/deleteUser/:id", UserController.deleteUser);
router.get("/:email", UserController.getUserFromEmail);

module.exports = router;
