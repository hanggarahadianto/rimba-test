const db = require("../models/index");

const { sequelize, customer } = require("../models");

// ----------------------------------------------------

exports.getCustomer = async (req, res) => {
  const customerData = await customer.findAll();
  res.status(200).json(customerData);
};

exports.addCustomer = async (req, res) => {
  try {
    // const customerData = req.body;
    const newCustomer = await customer.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      ktp: req.file.path,
    });
    res.status(200).json({
      message: "success",
      data: newCustomer,
      ktp: "http://localhost:3000/uploads/" + newCustomer.ktp,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCustomerId = async (req, res) => {
  try {
    const id = req.params.id;
    const getCustomerId = await customer.findOne({
      where: { id: id },
    });
    if (getCustomerId) {
      res.json({
        message: "success",
        data: getCustomerId,
      });
    } else {
      res.json({
        message: "customer not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
