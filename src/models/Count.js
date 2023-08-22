const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
  no_mutations: { type: Number },
});

module.exports = mongoose.model('Count', countSchema);