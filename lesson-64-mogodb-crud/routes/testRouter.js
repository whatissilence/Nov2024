import express from 'express';
import { addManyPersons, addPerson, findPerson, getPersons, updatePerson } from '../src/services/persons.js'
export const testRouter = express.Router();

testRouter.get('/', async (req, res) => {

  const result = await updatePerson();
  res.json(result);
})

testRouter.get('/persons', async (req, res) => {
  res.json(await getPersons());
})
