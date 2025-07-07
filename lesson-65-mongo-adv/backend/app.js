import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import cors from 'cors';

dotenv.config();

const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const PORT = process.env.PORT || 3000;

const client = new MongoClient(MONGO_CONNECTION);

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

let db;

app.get('/', (req, res) => {
  res.send('Welcome');
})

app.get('/persons', async (req, res) => {
  const persons = db.collection('persons');
  const result = await persons.find({}).sort({name: 1}).limit(2).toArray();

  res.json(result);
})

app.get('/movies', async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;

  const moviesCollection = db.collection('movies');
  const totalCount = await moviesCollection.countDocuments();

  const skip = (page - 1) * perPage;
  const limit = parseInt(perPage);

  const result = await moviesCollection.find({}).skip(skip).limit(limit).toArray();

  res.json({
    totalCount,
    data: result,
  });
})

app.get('/create-orders', async (req, res) => {
  await db.createCollection('orders');
  const ordersCollection = db.collection('orders');

  const orders = [
    {product: "toothbrush", total: 4.75, customer: "Mike"},
    {product: "guitar", total: 199.99, customer: "Tom"},
    {product: "milk", total: 11.33, customer: "Mike"},
    {product: "pizza", total: 8.50, customer: "Karen"},
    {product: "toothbrush", total: 4.75, customer: "Karen"},
    {product: "pizza", total: 4.75, customer: "Dave"},
    {product: "toothbrush", total: 4.75, customer: "Mike"},
  ];

  const result = await ordersCollection.insertMany(orders);

  res.json(result)
})

app.get('/orders', async (req, res) => {
  const ordersCollection = db.collection('orders');

  // const result = await ordersCollection.count({ product: 'toothbrush' });
  // const result = await ordersCollection.distinct('product');

  const result = await ordersCollection.aggregate([
    // { $match: { product: { $in: ['pizza', 'toothbrush']}} },
    { $group: { _id: '$product', totalSales: { $sum: '$total' }, count: { $sum: 1 }, averagePrice: { $avg: '$total' } } },
    { $sort: { count: 1, _id: 1 } },
  ]).toArray();

  res.json(result);
})

app.get('/indexes', async (req, res) => {
  // const personsCollection = db.collection('persons');
  // await personsCollection.createIndex({ email: 1 }, { unique: true });

  // const moviesCollection = db.collection('movies');
  // await moviesCollection.createIndex({ 'tomatoes.viewer.rating': 1 });

  const moviesCollection = db.collection('movies');
  // await moviesCollection.createIndex({ type: 'text' });
  const moviesAboutDinosaurs = await moviesCollection.find({ $text: { $search: 'dinosaur' } }).toArray();
  // const searchResult = await moviesCollection.find({ title: { $regex: /^dinosaur$/i } }).toArray();

  res.json(searchResult);
})

app.get('/search', async (req, res) => {
  const moviesCollection = db.collection('movies');
  // await moviesCollection.createIndex({ genres: 1 });
  const result = await moviesCollection.find( { genres: 'Comedy' }).limit(5).toArray();

  res.json(result);
})

app.get('/explain', async (req, res) => {
  const moviesCollection = db.collection('movies');
  // const indexes = await moviesCollection.indexes();
  const textSearch = await moviesCollection.find({ $text: { $search: 'dinosaur' } }).explain();
  const regexSearch = await moviesCollection.find({ title: { $regex: /^dinosaur$/i } }).explain();
  const simpleSearch = await moviesCollection.find({ title: 'Dinosaur' }).explain();

  res.json(simpleSearch);
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
