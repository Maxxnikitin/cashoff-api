const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  bik: {
    type: String,
    required: true,
    unique: true,
    minlength: 9,
    maxlength: 9,
  },
  address: {
    type: String,
    required: true,
  },
  corrAccount: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 20,
  },
});

module.exports = mongoose.model('bank', bankSchema);
