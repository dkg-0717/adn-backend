const mongoose = require('mongoose');
const statsSchema = require('../models/Stats')
const countSchema = require('../models/Count')

// Función para guardar estadísticas
async function incrementCount() {
  try {
    const mutations = await countSchema.find()
    const counter = mutations.length == 0 ? 1 : mutations[0].nomutations + 1;

    if (counter == 1) {
      const count = countSchema({ nomutations: counter })
      const response = count.save()
      return response
    } else {
      const id = mutations[0]._id.toHexString()
      const response = countSchema.findByIdAndUpdate(id, { nomutations: Number(counter) }, { 'new': true })
      return response
    }

  } catch (err) {
    console.log(err)
  }

}

async function getStats() {
  const allAdn = await statsSchema.find()
  if (allAdn.length > 0) {
    const mutations = allAdn.length
    const nomutationsResponse = await countSchema.find()
    const nomutations = nomutationsResponse[0].nomutations
    const ratio = mutations / nomutations
    return {
      'count_mutations': mutations,
      'count_no_mutation': nomutations,
      'ratio': ratio
    }
  } else {
    return {
      'count_mutations': 0,
      'count_no_mutation': 0,
      'ratio': 0
    }
  }
}


module.exports = {
  getStats,
  incrementCount
};