const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const todoSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    taskList: {
      type: ObjectId,
      ref: "TaskList",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ToDo", todoSchema);
