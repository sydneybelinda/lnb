const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fos_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    username_canonical: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: "UNIQ_957A647992FC23A8"
    },
    email: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    email_canonical: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: "UNIQ_957A6479A0D96FBF"
    },
    enabled: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirmation_token: {
      type: DataTypes.STRING(180),
      allowNull: true,
      unique: "UNIQ_957A6479C05FB297"
    },
    password_requested_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    roles: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "(DC2Type:array)"
    }
  }, {
    sequelize,
    tableName: 'fos_user',
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
        name: "UNIQ_957A647992FC23A8",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username_canonical" },
        ]
      },
      {
        name: "UNIQ_957A6479A0D96FBF",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email_canonical" },
        ]
      },
      {
        name: "UNIQ_957A6479C05FB297",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "confirmation_token" },
        ]
      },
    ]
  });
};
