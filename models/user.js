const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    minlength: 3,
  },
  passwordHash: String,
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("User", schema);
