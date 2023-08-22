const express = require('express');
const router = express.Router();
const { getStats } = require('../services/StatsService')

// Servicio "/stats/"
router.get('/stats', async (req, res) => {
  const response = await getStats()
  res.json({
    ok: true,
    ...response
  })
});

module.exports = router;