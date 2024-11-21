const { sequelize, DataTypes } = require("coelhojs-core");

const Category = sequelize.define(
  "Category",
  {
    category_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  //{
  // indexes: [
  // {
  // fields: [/* You can add here the fields related to a field in an other model (associations) */],
  // },
  // ],
  // }
);

module.exports = Category;
