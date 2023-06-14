module.exports = function (sequelize, DataTypes) {
  return sequelize.define("sales", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    transaction_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    customer: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "customer",
        key: "id",
      },
      unique: "order_customer_foreign",
    },
  });
};
