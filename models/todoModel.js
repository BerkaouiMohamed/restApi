const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todo: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true },
    status: { type: String, enum: ["pending", "done"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("todo", todoSchema);
