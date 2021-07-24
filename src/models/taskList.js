const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const taskListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TaskList", taskListSchema);
