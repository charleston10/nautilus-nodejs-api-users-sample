import { Sequelize } from "sequelize";

export default (sequelize: Sequelize, DataTypes: any) => {
  const UserEntity = sequelize.define('user', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Invalid email'
        }
      },
      unique: true
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: true,
    paranoid: false,
    underscored: true,
    freezeTableName: true,
    indexes: [{
      unique: true,
      fields: ['email']
    }]
  });

  return UserEntity;
};