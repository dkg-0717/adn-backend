const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  adn: { type: String, required: true },
});

module.exports = mongoose.model('stats', statsSchema);