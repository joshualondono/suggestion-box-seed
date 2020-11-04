const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true, unique: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  password: { type: String, required: true, lowercase: true, trim: true },
  suggestion: { type: String, required: true, lowercase: true, trim: true },
});

module.exports = mongoose.model('suggestions', schema);