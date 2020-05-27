const mongoose = require("mongoose");
const Task = require("./Task");
const shortid = require("shortid");

const Column = new mongoose.Schema({
  name: String,
  tasks: ["Task"],
  code: {
    type: String,
    unique: true,
  },
});
Column.pre("save", async function (next) {
  if (this.code) return next();

  let code;

  do {
    code = shortid.generate();
  } while (await this.constructor.findOne({ code }));

  this.code = code;

  next();
});

module.exports = mongoose.model("Column", Column);
