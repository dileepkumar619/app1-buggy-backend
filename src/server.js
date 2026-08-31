require('dotenv').config();
const express = require('express');
const logger = require('./logger');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Buggy backend is running'
  });
});

app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl
  });

  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

app.listen(PORT, () => {
  console.log(`App 1 running on http://localhost:${PORT}`);
  console.log(`Trigger bug using http://localhost:${PORT}/users/999`);
});
