const express = require('express');
const router = express.Router();

const ADN = require('../../utils/checkAdn')

// Servicio "/mutation/"
router.post('/mutation', (req, res) => {
  const dna = req.body.dna
  if (dna.length > 0) {
    const mutation = new ADN(dna)
    const isMutant = mutation.isMutant()
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