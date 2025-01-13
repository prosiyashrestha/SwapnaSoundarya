const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers");
const upload = require("../middleware/multer");

router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/getSingleUser/:id", UserController.getSingleUser);
router.post("/changepassword", UserController.changePassword);
router.put(
  "/updateUser/:id",
  upload.single("profileImage"), // Field name matches frontend
  UserController.updateUser
);

module.exports = router;
