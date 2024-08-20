const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        if (value.length < 3) {
          throw new Error("name not valid");
        }
      },
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!reg.test(value)) {
          throw new Error("email not valid");
        }
      },
    },
  },
  password: { type: String, required: true },
  role:{type:String,enum:["admin","user"],default:"user"}
});



module.exports=new mongoose.model("user",userSchema)