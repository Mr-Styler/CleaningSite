const router = require("express").Router();
var shopController = require("../controllers/shop");

router.get("/", shopController.getIndex)

router.get("/products", shopController.getProducts)

router.get("/product/:productId", shopController.getShowProduct)

router.get("/cart", shopController.getCart)

router.post("/cart", shopController.postAddCart)

router.get("/order", shopController.getOrder)

router.get("/checkout", shopController.getCheckout)

module.exports = router