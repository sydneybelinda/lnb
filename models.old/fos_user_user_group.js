const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fos_user_user_group', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fos_user',
        key: 'id'
      }
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fos_group',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'fos_user_user_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "group_id" },
        ]
      },
      {
        name: "IDX_B3C77447A76ED395",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "IDX_B3C77447FE54D947",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};
