const db = require("../models/index");

const { sequelize, sales, item } = require("../models");

// ----------------------------------------------------

exports.getSales = async (req, res) => {
  const salesData = await sales.findAll();
  res.status(200).json(salesData);
};

exports.addSales = async (req, res) => {
  try {
    const salesData = req.body;
    const newSales = await sales.create(salesData);
    res.status(200).json({
      message: "success",
      data: newSales,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getSalesId = async (req, res) => {
  try {
    const id = req.params.id;
    const getSalesId = await sales.findOne({
      where: { id: id },
    });
    if (getSalesId) {
      res.json({
        message: "success",
        data: getSalesId,
      });
    } else {
      res.json({
        message: "sales not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.postSales = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { customer } = req.body;
    const newCustomer = await customer.create(
      {
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        phone: customer.phone,
      },
      { transaction }
    );

    const newSales = await sales.create(
      {
        customer: newCustomer.id,
      },
      { transaction }
    );

    const cartToCheckout = req.body.cart;
    const cartSplit = {};

    for (let i = 0; i < cartToCheckout.length; i++) {
      cartSplit[i] = cartToCheckout[i];

      const item_details = await item.findOne({
        where: {
          id: cartSplit[i].item.id,
        },
      });

      const get_items_details_price = item_details.price;

      const item_id = cartSplit[i].item_id;
      const quantity = cartSplit[i].quantity;
      const item_price = get_items_details_price;

      const cartData = {
        sales_id: newSales.id,
        item_id: item_id,
        quantity: quantity,
        item_price: item_price,
        total: parseInt(item_price * quantity),
      };
      await cart.create(cartData, { transaction });
    }
    console.log("new order created");
    await transaction.commit();
    res.json(newSales);
  } catch (error) {
    console.log(error);
    res.send({
      message: "failed",
    });
  }
};
