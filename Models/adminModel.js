const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  imageId: {
    type: String,
  },
  type: {
    type: String,
    enum: ['Lunch', 'Dinner', 'Breakfast'],
    required: true
  }
});

module.exports = mongoose.model("adminModel", adminSchema);
