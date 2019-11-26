const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  date: Date
}, { timestamps: true });

module.exports = mongoose.model('Workshop', WorkshopSchema);