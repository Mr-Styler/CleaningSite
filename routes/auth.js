const router = require("express").Router();
var AuthController = require("../controllers/auth");

//SIGN UP
router.post("/signUp", AuthController.postSignUp)

router.get("/signUp", AuthController.getSignUp)

router.get("/login", AuthController.getLogin)

module.exports = router