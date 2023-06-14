const db = require("../models/index");

const { sequelize, item } = require("../models");

// ----------------------------------------------------

exports.getItem = async (req, res) => {
  const itemData = await item.findAll();
  res.status(200).json(itemData);
};

exports.addItem = async (req, res) => {
  try {
    const itemData = req.body;
    const newItem = await item.create(itemData);
    res.status(200).json({
      message: "success",
      data: newItem,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getItemId = async (req, res) => {
  try {
    const id = req.params.id;
    const getItemId = await item.findOne({
      where: { id: id },
    });
    if (getItemId) {
      res.json({
        message: "success",
        data: getItemId,
      });
    } else {
      res.json({
        message: "item not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
