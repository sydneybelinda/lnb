"use strict";
module.exports = (sequelize, DataTypes) => {
  const Escort = sequelize.define(
    "escort",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      firstName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      surname: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      shortDesc: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      availability: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      incalls: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      outcalls: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      age: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      nationality: {
        type: DataTypes.TEXT,
        allowNull: true
      },

      height: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      eyes: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      hair: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      stats: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      dressSize: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      sexualPreference: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      languages: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      currency: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      price: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      firstname: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      facebook: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      twitter: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      linkedin: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      views: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      movedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      timestamps: false
    }
  );
  Post.associate = function(models) {
    Post.hasMany(models.File, {
      foreignKey: "postId",
      as: "files",
      onDelete: "CASCADE"
    });

    Post.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE"
    });
  };
  return Post;
};
