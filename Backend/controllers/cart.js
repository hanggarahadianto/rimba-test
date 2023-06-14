const db = require("../models/index");

const { cart } = require("../models");

// ----------------------------------------------------

exports.getCart = async (req, res) => {
  const cartData = await cart.findAll();
  res.status(200).json(cartData);
};

exports.addCart = async (req, res) => {
  try {
    const cartData = req.body;
    const newCart = await cart.create(cartData);
    res.status(200).json({
      message: "success",
      data: newCart,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCartId = async (req, res) => {
  try {
    const id = req.params.id;
    const getCartId = await cart.findOne({
      where: { id: id },
    });
    if (getCartId) {
      res.json({
        message: "success",
        data: getCartId,
      });
    } else {
      res.json({
        message: "cart not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
