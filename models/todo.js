const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// String, Number, Boolean

const nestedObj = new mongoose.Schema({
  field_1: String
});

const TodoSchema = new mongoose.Schema({
  record: { type: String, required: true },
  date: {
    type: Number,
    default: Date.now
  },
  obj: nestedObj
});

const model = mongoose.model('TodoModel', TodoSchema);

module.exports = model;
