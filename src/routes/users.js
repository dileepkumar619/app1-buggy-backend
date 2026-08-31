const express = require('express');

const router = express.Router();

router.get('/register', (req, res) => {
  const { name, email } = req.query;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const response = {
    nameLength: name.length,
    emailDomain: email.split('@')[1] || null
  };

  res.status(200).json(response);
});

module.exports = router;