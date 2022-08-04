const express = require('express');
const router = express.Router();

const Foil = require('../models/foil.model');

router.get('/foils', async (req, res) => {
  try {
    const result = await Foil.find();
    if(!result) res.status(404).json({ foil: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
