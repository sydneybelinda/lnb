const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fos_group', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: "UNIQ_4B019DDB5E237E06"
    },
    roles: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "(DC2Type:array)"
    }
  }, {
    sequelize,
    tableName: 'fos_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UNIQ_4B019DDB5E237E06",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
