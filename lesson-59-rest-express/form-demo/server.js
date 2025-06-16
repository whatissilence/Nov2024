import express from 'express';
import { formHtml } from './form.js';

// Start server
const PORT = 3003;

const app = express();

// Middleware to parse x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }));

// If we want to make POST from fetch
// app.use(express.json());

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.send(formHtml);
})

// POST route to handle form submission
app.post('/users', (req, res) => {
  console.log('Received user data:', req.body);
  res.send(`
    <p>We will call you back, dear <strong>${req.body.name}</strong>!</p>
    <a href="/">Go back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
