import express from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './db.js'
import { testRouter } from '../routes/testRouter.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(testRouter);

const startServer = async () => {
  try {
    await connectToDB();

    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();