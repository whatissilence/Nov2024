import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { personRouter } from './routes/person.js'

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;

const app = express();
app.use(express.json());

app.use('/persons', personRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

async function startServer() {
  try {
    await mongoose.connect(MONGO_CONNECTION);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

startServer();