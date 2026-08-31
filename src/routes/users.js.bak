const express = require('express');
const users = require('../data/users');

const router = express.Router();

// Intentional runtime bug
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  const response = {
    id: user.id,
    name: user.name.toUpperCase(),
    email: user.email.toLowerCase()
  };

  res.status(200).json(response);
});

module.exports = router;
