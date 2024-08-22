const asyncHandler = require("../utils/asyncHandler");
const hashPassword = require("../utils/hashPassword");
const userModel = require("../models/userModel");
const comparePassword = require("../utils/comparePassword");
const generateToken = require("../utils/generateToken");

module.exports = {
  register: asyncHandler(async (req, res) => {
    const existUser = await userModel.findOne({ email: req.body.email });

    if (existUser) {
      throw new Error("user allready exist");
    }
    const password = hashPassword(req.body.password);
    const newUser = await userModel.create({ ...req.body, password });
    res.json({ status: "success", data: newUser });
  }),
  login: asyncHandler(async (req, res) => {
    const existUser = await userModel.findOne({ email: req.body.email });

    if (!existUser) {
      throw new Error("somthing went wrong");
    }
    if (!comparePassword(existUser.password, req.body.password)) {
      throw new Error("somthing went wrong");
    }
    if(existUser.role!="admin") {
      res.json({
        status: "success",
        data: generateToken({ _id: existUser._id, name: existUser.name }),
      });
    }
    else{
      res.json({
        status: "success",
        data: generateToken({ _id: existUser._id, name: existUser.name }),
        role:existUser.role,
      });
    }
  }),
};
