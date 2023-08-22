const express = require('express');
const router = express.Router();
const { saveADN } = require('../services/AdnService')
const { incrementCount } = require('../services/StatsService')

const ADN = require('../../utils/checkAdn')

// Servicio "/mutation/"
router.post('/mutation', async (req, res) => {
  const dna = req.body.dna
  if (dna && dna.length > 0) {
    const mutation = new ADN(dna)
    const { isMutant, adn } = mutation.isMutant()
    if (isMutant) {
      const response = await saveADN(adn)
      if (!response?.error) {
        console.log(response)
      } else {
        const response = await incrementCount()
        // console.log(response)
      }
    }

    const status = isMutant ? 200 : 403
    const ok = status == 200 ? true : false

    const response = {
      ok,
      status
    };
    res.json(response);
  }
  if (!dna || dna.length == 0) {
    const response = {
      ok: false,
      status: 403,
      msg: 'Necesitas enviar un objeto dna válido'
    };
    res.json(response);
  }

});

module.exports = router;