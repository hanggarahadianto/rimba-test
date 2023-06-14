const path = require("path");
const express = require("express");

const customerController = require("../controllers/customer");
const { uploadFile } = require("../middleware/uploadFile");

const router = express.Router();

router.get("/", customerController.getCustomer);
router.post("/", uploadFile("ktp"), customerController.addCustomer);
router.get("/:id", customerController.getCustomerId);

// router.get("/product", orderController.getProducts);
// router.get("/cart", orderController.getCart);

// router.post("/cart", orderController.postCart);

module.exports = router;
