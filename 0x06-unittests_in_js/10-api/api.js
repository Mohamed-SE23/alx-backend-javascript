const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7865;

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with id validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Available payments route
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Login route
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    res.status(400).send('Missing userName');
    return;
  }
  res.send(`Welcome ${userName}`);
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
