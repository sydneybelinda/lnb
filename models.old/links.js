const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('links', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    link: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'links',
    timestamps: false,
  });
};
