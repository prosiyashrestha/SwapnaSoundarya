const router = require("express").Router();
const providerController = require("../controllers/providerControllers");
const authGuard = require("../middleware/authGuard");

router.post("/beourbeautician", providerController.createProvider);

module.exports = router;
