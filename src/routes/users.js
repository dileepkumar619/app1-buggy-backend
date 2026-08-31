const express = require('express');
const users = require('../data/users');

const router = express.Router();

// Fixed runtime bug with proper not-found handling
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const response = {
    id: user.id,
    name: user.name.toUpperCase(),
    email: user.email.toLowerCase()
  };

  res.status(200).json(response);
});

module.exports = router;