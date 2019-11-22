// models/Reptile.js

const mongoose = require('mongoose');

const ReptileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  owner: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Reptile = mongoose.model('reptile', ReptileSchema);
