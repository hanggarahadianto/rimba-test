const path = require("path");
const express = require("express");

const salesController = require("../controllers/sales");

const router = express.Router();

router.get("/", salesController.getSales);
// router.post("/", salesController.addSales);
router.get("/:id", salesController.getSalesId);

// router.get("/product", orderController.getProducts);
// router.get("/cart", orderController.getCart);

// router.post("/cart", orderController.postCart);

module.exports = router;
