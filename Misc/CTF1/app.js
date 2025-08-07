const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Route: GET /
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
