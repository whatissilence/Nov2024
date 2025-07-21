import express from 'express';
import { Person } from '../models/Person.js'

export const personRouter = express.Router();

personRouter.get('/', async (req, res) => {
  const filter = req.query;

  try {
    const persons = await Person.find(filter);
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

personRouter.get('/:personId', async (req, res) => {
  const { personId } = req.params;

  try {
    const persons = await Person.find({_id: personId});
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

personRouter.post('/', async (req, res) => {
  const { name, age, email, mother, hobbies, address } = req.body;

  const person = new Person({ name, age, email, mother, hobbies, address });
  person.mother = mother;

  try {
    const savedPerson = await person.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

personRouter.put('/:personId', async (req, res) => {
  const { personId } = req.params;
  const newData = req.body;

  const testPerson = new Person(newData);
  const errors = testPerson.validateSync();

  if(errors) {
    return res.status(400).json(errors.message)
  }

  try {
    // doesn't make validation
    const updatedPerson = await Person.replaceOne(
      {_id: personId},
      newData
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

personRouter.patch('/:personId', async (req, res) => {
  const { personId } = req.params;
  const updateData = req.body;

  try {
    const person = await Person.findById(personId);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    Object.assign(person, updateData);

    const updatedPerson = await person.save();
    res.json(updatedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

personRouter.delete('/:personId', async (req, res) => {
  const { personId } = req.params;

  try {
    const deletedPerson = await Person.findByIdAndDelete(personId);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully', deletedPerson });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

// ===================================
// ЦЕ НЕ РЕСТ! ЦЕ ПРОСТО ТЕСТОВІ ЕНДПОІНТИ!

personRouter.get('/avg-balance', async (req, res) => {
  // const result = await Person.find({ balance: { $exists: true } }, 'name balance -_id');

  // Рахує за замовчуванням середній баланс у тих користувачів, у яких існує поле баланс
  const result = await Person.aggregate([
    { $group: { _id: null, totalBalance: { $avg: '$balance' } } }
  ])

  res.json(result);
})

personRouter.get('/with-mother', async (req, res) => {
  const result = await Person.find({ name: 'Gordon Freeman' }).populate('mother', 'name email');

  res.json(result);
})

