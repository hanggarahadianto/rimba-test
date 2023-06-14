const path = require("path");
const express = require("express");

const itemController = require("../controllers/item");

const router = express.Router();

router.get("/", itemController.getItem);
router.post("/", itemController.addItem);
router.get("/:id", itemController.getItemId);

// router.get("/product", orderController.getProducts);
// router.get("/cart", orderController.getCart);

// router.post("/cart", orderController.postCart);

module.exports = router;
