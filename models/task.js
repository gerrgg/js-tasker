const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  due: Date,
  priority: {
    type: Boolean,
    default: false,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  late: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", schema);
