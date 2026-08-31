const express = require('express');

const router = express.Router();

router.get('/register', (req, res) => {
  const { name, email } = req.query;

  const response = {
    nameLength: name.length,
    emailDomain: email.split('@')[1]
  };

  res.status(200).json(response);
});

module.exports = router;
