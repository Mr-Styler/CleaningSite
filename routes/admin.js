const router = require("express").Router();
var AdminController = require("../controllers/admin");

router.get("/dashboard", AdminController.getDashboard)

router.get("/products", AdminController.getAdminProducts)

router.get("/addProduct", AdminController.getAddProduct)

router.post("/addProduct", AdminController.postAddProduct)

router.get("/editProduct", AdminController.getEditProduct)

module.exports = router