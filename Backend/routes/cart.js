const path = require("path");
const express = require("express");

const cartController = require("../controllers/cart");

const router = express.Router();

router.get("/", cartController.getCart);
router.post("/", cartController.addCart);
router.get("/:id", cartController.getCartId);

// router.get("/product", orderController.getProducts);
// router.get("/cart", orderController.getCart);

// router.post("/cart", orderController.postCart);

module.exports = router;
