const SELLERUSER = require('../model/selleruser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.SECURE = async function (req, res, next) {
  try {
    let token = req.
    headers.authorization
    if(!token){
      throw new Error("Please Enter Valid Token")
    }
    let tokendata = jwt.verify(token, "SURAT") 
    console.log(tokendata.id)
    let checkUser = await SELLERUSER.findById(tokendata.id)
    if(!checkUser){
      throw new Error("User not Found")
    }
    next()
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}

exports.sellersignup = async function (req, res, next) {
    try {
      const signup = req.body
      if (!signup.name || !signup.email || !signup.password) {
        throw new Error("Please Enter Valid Field")
      }
      signup.password = await bcrypt.hash(signup.password, 10)
      let data = await SELLERUSER.create(signup)
      let token = jwt.sign({ id: data._id }, 'SURAT')
      res.status(200).json({
        message: "signup Successful",
        data,
        token
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }

  exports.sellerlogin = async function (req, res, next) {
    try {
      const loginData = req.body
      if (!loginData.email || !loginData.password) {
        throw new Error("Please Enter Valid Fields")
      }
      const checkUser = await SELLERUSER.findOne({ email: loginData.email })
      console.log(checkUser)
      if (!checkUser) {
        throw new Error("Email is Wrong")
      }
      const checkPass = await bcrypt.compare(loginData.password, checkUser.password)
      if (!checkPass) {
        throw new Error("password is wrong")
      }
      var token = jwt.sign({ id: checkUser._id }, 'SURAT');
      res.status(200).json({
        message: "Login Successful",
        data: checkUser,
        token
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }

