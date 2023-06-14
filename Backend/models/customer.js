module.exports = function (sequelize, DataTypes) {
  return sequelize.define("customer", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    discount: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ktp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
