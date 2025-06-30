import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './db.js'
import { moviesRouter } from './routes/movies.js'
import { indexRouter } from './routes/index.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(moviesRouter);
app.use(indexRouter);

async function startServer() {
  try {
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

startServer();
