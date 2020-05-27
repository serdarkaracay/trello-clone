var express = require("express");
var router = express.Router();
const Column = require("../models/column");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/column", async function (req, res, next) {
  debugger;
  const column = new Column({ title: "test column" });
  await column.save();

  // res.send(column);

  res.status(200).json(column);

  //

});

module.exports = router;
