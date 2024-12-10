const express = require('express');

const app = express();
const PORT = 7865;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with id validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export the app for testing
