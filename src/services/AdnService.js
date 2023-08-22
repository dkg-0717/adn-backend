const mongoose = require('mongoose');
const statsSchema = require('../models/Stats')

// Función para guardar estadísticas
async function saveADN(adn) {

  const stats = statsSchema({ adn });
  const adnResponse = await statsSchema.findOne({ adn })
  if (adnResponse == null) {
    try {
      const response = await stats.save()
      return response
    } catch (err) {
      return { err }
    }
  } else {
    return { error: true, msg: 'El item ya existe' }
  }

}

module.exports = {
  saveADN
};