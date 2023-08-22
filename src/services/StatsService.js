const mongoose = require('mongoose');
const countSchema = require('../models/Count')

// Función para guardar estadísticas
async function incrementCount() {
  try {
    const mutations = await countSchema.find()
    console.log(mutations)
    const counter = mutations.length == 0 ? 1 : mutations.no_mutations + 1;

    if (counter == 1) {
      const response = countSchema.save({ no_mutations: counter })
      return response
    } else {
      const response = countSchema.findOneAndUpdate({ id: mutations._id }, {
        no_mutations: counter
      })
      return response
    }

  } catch (err) {
    console.log(err)
  }

  // try {
  //   const newStats = new Stats({
  //     views: views,
  //     clicks: clicks,
  //     // Asigna valores a otros campos según tus necesidades
  //   });

  //   await newStats.save();
  //   return { success: true, message: 'Estadísticas guardadas exitosamente' };
  // } catch (error) {
  //   return { success: false, message: 'Error al guardar estadísticas', error: error.message };
  // }
}

module.exports = {
  incrementCount
};