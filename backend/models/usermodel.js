const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  simNumber: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  activationDate: {
    type: Date,
    default: Date.now,
  },
});

const SimCard = mongoose.model('User', userSchema);

module.exports = SimCard;
