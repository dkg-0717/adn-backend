const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
  nomutations: { type: Number },
});

module.exports = mongoose.model('count', countSchema);