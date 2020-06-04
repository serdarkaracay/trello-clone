const mongoose = require("mongoose");
const id = require("shortid");

const Task = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  voters: {
    type: [String],
    default: [],
  },
  tags: {
    type: [String],
  },
  user: {
    type: "ObjectId",
    ref: "User",
  },
  participants: [
    {
      type: "ObjectId",
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Task", Task);

const department = new mongoose.Schema({
  id: mongoose.SchemaTypes.ObjectId,
  departmenName: String,
});

const title = new mongoose.Schema({
  id: mongoose.SchemaTypes.ObjectId,
  titleName: String,
});

const personalSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  createdOn: Date,
  isActive: Boolean,
  title: [title],
  department: [department],
});

let titles = [];
const title = { id: 1, titleName: "Engineer" };
const title2 = { id: 2, titleName: "Expert Manager" };
titles.push(title, title2);

let departments = [];
const department = { id: 1, departmenName: "Sales" };
const department2 = { id: 2, departmenName: "Support" };
departments.push(department, department2);

let person = new personalSchema({
  name: "Serdar",
  lastName: "Karacay",
  createdOn: Date,
  title: titles,
  department: departments,
});

personalSchema.save(function (err, person) {
  if (err) {				
    return json(err)
  }
  return json(member)
})
