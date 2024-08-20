const userModel = require("../models/userModel");
const asyncHandler = require("./asyncHandler");
const decodeToken = require("./decodeToken");

module.exports=asyncHandler(async (req,res,next)=>{
    const token =req.headers.Authorization ||req.headers.authorization
    const decode=decodeToken(token)
    if (!decode){
        throw new Error('user must be logged in')
    }
    req.headers.decode=decode
    const user=await  userModel.findById(decode._id)
    req.headers.role=user.role
    next()
})