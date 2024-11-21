const { sequelize, DataTypes } = require("coelhojs-core");

const Resource = sequelize.define(
  "Resource",
  {
    resource_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        fields: ["salon_id"],
      },
    ],
  }
);

module.exports = Resource;
