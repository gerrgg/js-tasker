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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Task", schema);
