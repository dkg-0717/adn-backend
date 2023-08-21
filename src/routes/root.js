const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const response = {
    ok: true,
    status: 200
  };

  res.json(response);
});

module.exports = router;