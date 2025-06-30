import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const PORT = process.env.PORT || 3000;

const client = new MongoClient(MONGO_CONNECTION);

const app = express();
app.use(express.json());

let db;

app.get('/', (req, res) => {
  res.send('<a href="/movies">Movies</a>');
})

app.get('/movies', async (req, res) => {
  const moviesCollection = db.collection('movies');
  const movies = await moviesCollection.find().limit(10).toArray();

  res.json(movies);
})


app.get('/movies/:movieId', async (req, res) => {
  const { movieId } = req.params;

  if (!ObjectId.isValid(movieId)) {
    return res.status(400).send('Invalid movie ID format');
  }

  const moviesCollection = db.collection('movies');
  // const movies = await moviesCollection.find({ title: 'A Corner in Wheat' }).toArray();
  const movies = await moviesCollection.find({ _id: new ObjectId(movieId) }).toArray();

  res.json(movies);
})

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    db = client.db('sample_mflix');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

startServer()
