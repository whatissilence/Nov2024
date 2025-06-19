import express from 'express';
import { logger } from './middlewares/logger.js'
import { errorHandler } from './middlewares/errorHandler.js'
import Joi from 'joi'
import { validateUser } from './validators/validateUser.js'

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(logger);

app.get('/', (req, res) => {
  res.send('Some string!');
});

app.get('/test', (req, res) => {
  // throw new Error('AAAAAAA!!!! PANIC!!!');
  res.send('TEST!');
});


app.post('/signup', logger, validateUser, (req, res) => {
  res.send('Signed up!');
})

app.put('/users/:userId', validateUser, (req, res) => {
  res.send('User edited!');
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
