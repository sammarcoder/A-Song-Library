const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const jwtSignUser = (user) => {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
};

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(user.toJSON()),
      });
    } catch (err) {
      res.status(400).send({
        error: "this email is alredy in use. try with another email",
      });
    }
  },
  login: async (req, res) => {
    try{
    const {email, password} = (req.body)
    const user = await User.findOne({
      where:{
        email :email,
      }
    })
    if(!user){
      return res.status(400).send({
        error: 'You enter the wrong email please Enter with registed email adress'
      })
    }
    const isPasswordValid = await user.comparePassword(password)
    if(!isPasswordValid){
      return res.status(400).send({
        error : 'you Enter the Wrong password, Please Enter the Right Password'
      })
    }
    userJson = user.toJSON()
    res.send({
      user : userJson,
      token : jwtSignUser(userJson),
      login : true
    })
  }catch(err){
    res.status(403).send({
      error :`An unexpected error ${err}`
    })
  }
  },
};
