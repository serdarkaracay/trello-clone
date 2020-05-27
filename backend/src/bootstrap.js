const mongoose = require("mongoose");
const mongoHost = process.env.MONGO_HOST || "mongodb";

mongoose.connect(`mongodb://${mongoHost}:27017/trello`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connection"));
db.once("open", function () {
  console.log("Connected on MongoDb");
});
module.exports = { mongoose };
