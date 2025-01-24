const bcrypt = require('bcrypt');

const hasPassword = async (detail) => {
  const SALT_FACTOR = 8;
  if (!detail.changed('password')) {
    return;
  }
  try {
    const salt = await bcrypt.genSalt(SALT_FACTOR);
    const hash = await bcrypt.hash(detail.password, salt);
    detail.setDataValue('password', hash);
  } catch (err) {
    throw new Error('Error hashing password: ' + err.message);
  }
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  },
  {
    hooks: {
      beforeSave: hasPassword,
      beforeUpdate: hasPassword,
    },
},
);

  User.prototype.comparePassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (err) {
      throw new Error('Error comparing password: ' + err.message);
    }
  };
  return User;
};
