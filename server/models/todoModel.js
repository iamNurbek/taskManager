const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: { type: String, require: true },
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('todo', todoSchema);
