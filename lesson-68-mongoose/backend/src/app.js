import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Person from './models/Person.js'
import { ObjectId } from 'mongodb'

dotenv.config();

const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome');
})

app.get('/test', async (req, res) => {
  try {
    const person = new Person({
      name: 'Johann Sebastian Bach',
      age: 44,
      mother: new ObjectId('6866b93309cb8abe8e1eccf7')
    });

    await person.save();
    console.log('Person saved:', person);

    res.send('Success');
  } catch (error) {
    console.error('Error saving person:', error);
    res.status(400).send(`Error saving person ${error.message}`);
  }
})

// http://localhost:4000/mother?name=Johann%20Sebastian%20Bach
app.get('/mother', async (req, res) => {
  const { name } = req.query;

  const person = await Person.findOne({ name });

  if(!person) {
    return res.status(404).send('Person not found');
  }

  const mother = await Person.findById(person.mother);
  if(!mother) {
    return res.status(404).send('Mother not found');
  }

  res.json(mother);
})

app.get('/edit', async (req, res) => {
  try {
    // Краще не користовувати updateOne та updateMany, оскільки вони оминають валідацію
    // const person = await Person.updateOne(
    //   { name: 'Bob' },
    //   {
    //     $set: {
    //       name: 'A',
    //       email: 'lalala'
    //     }
    //   }
    // )

    const person = await Person.findById('68753b6275385ca8da86d925');

    if (!person) {
      return res.status(404).send('Person not found');
    }

    person.name = 'Bob';
    person.email = 'bob_super_bob@example.com';

    person.updatedAt = Date.now();

    await person.save();

    console.log('Person updated:', person);
    return res.json(person);
  } catch (e) {
    console.error('Error updating person:', e);
    return res.status(400).send(`Error updating person ${e.message}`);
  }
})


app.get ('/search', async (req, res) => {
  const persons = await Person.where('age').gt(30).lt(50);
  res.json(persons);
})

app.get ('/extension', async (req, res) => {
  const person = await Person.findById('68753b6275385ca8da86d925');
  console.log(person.sayHello());
  res.json(person.toJSON());
})

app.get ('/static', async (req, res) => {
  const person = await Person.findOneByName('bob');

  res.json(person);
})

app.get('/chain', async (req, res) => {
  const persons = await Person.find().byName('alice').where('age').gt(30);
  res.json(persons);
})

async function startServer() {
  try {
    await mongoose.connect(MONGO_CONNECTION);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

startServer()
