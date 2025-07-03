import { db } from '../db.js'
import { ObjectId } from 'mongodb'

export async function getPersons() {
  const personsCollection = db.collection('persons');

  const persons = await personsCollection.find().toArray();
  return persons;
}

// Цю функцію краще зробити, щоб передавася новий об'єкт в якості параметра і він потрапляв в функцію insertOne
export async function addPerson() {
  const personsCollection = db.collection('persons');

  const result = await personsCollection.insertOne({
    name: 'Nick Smith',
    age: null,
    email: 'nick@example.com',
    gender: 'Male',
  });

  const newPerson = await personsCollection.findOne({ _id: result.insertedId });
  return newPerson;
}

export async function addManyPersons() {
  const personsCollection = db.collection('persons');
  const personsToInsert = [{ name: 'John Doe', age: 30, email: 'john@example'}];

  const result = await personsCollection.insertMany(personsToInsert);
  return result;
}

export async function findPerson() {
  const personsCollection = db.collection('persons');
  // const result = await personsCollection.find().sort({ name: 1, age: -1 }).skip(0).limit(3).toArray();
  // const result = await personsCollection.find({ name: 'Glenna Reichert' }).toArray();
  // const result = await personsCollection.find({ name:  /^J/i }).toArray();

  // const result = await personsCollection.find({
  //   $or: [
  //     { age: 21 },
  //     { someData: 'someData' },
  //   ]
  // }).toArray();

  // const result = await personsCollection.find({}, { projection: { _id: 0, name: 0 } }).toArray();
  // const result = await personsCollection.find({ 'company.name': { $in: ['Robel-Corkery', 'Keebler LLC']} }).toArray();

  const result = await personsCollection.find({ 'company.name': { $in: ['Robel-Corkery', 'Keebler LLC']} }).toArray();

  return result;
}



// Цю функцію краще зробити, щоб передавася id об'єкта та нові поля в якості параметрів і вони потрапляли в функцію insertMany
export async function updatePerson() {
  const personsCollection = db.collection('persons');

  // const filter = { name: 'Glenna Reichert' };
  // const update = { $set: { age: 59, email: 'glenna@example.com' } };
  // const update = { $inc: { age: 1 } };
  // const update = { $unset: { createdAt: '' } };

  const filter = { email: 'oleksii@example.com' };
  // const update = { $addToSet: { hobbies: 'videoGames' } }; // не додає, якщо вже є в масиві
  // const update = { $push: { hobbies: 'videoGames' } }; // додає, якщо вже є в масиві
  // const update = { $rename: { someData: 'someOtherSpecialData' } };
  const update = { $set: { age: 22, name: 'Oleksii' } };
  const options = { upsert: true }; // створює новий документ, якщо не знайдено


  const result = await personsCollection.updateOne(filter, update, options);

  console.log('================result=====================');
  console.log(result);
  console.log('=====================================');

  return result;
}
