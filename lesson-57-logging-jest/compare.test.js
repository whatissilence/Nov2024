import { compareObjects } from './compare.js';
import { add } from './add.js'

describe('compareObjects function', () => {

  it('return true if objects are equal', () => {
    const person = { name: 'Somename', age: 25, gender: 'Male'};
    const person2 = { name: 'Somename', age: 25, gender: 'Male'};

    expect(compareObjects(person, person2)).toBe(true);
  })

  it('return true if objects are equal with different keys order', () => {
    const person = { name: 'Somename', age: 25, gender: 'Male'};
    const person2 = { name: 'Somename', gender: 'Male', age: 25};

    expect(compareObjects(person, person2)).toBe(true);
  })

  it('return false if objects are equal but second has one more key', () => {
    const person = { name: 'Somename', age: 25, gender: 'Male'};
    const person2 = { name: 'Somename', age: 25, gender: 'Male', height: 175};

    expect(compareObjects(person, person2)).toBe(false);
  })

  it('return false if second object miss one key', () => {
    const person = { name: 'Somename', age: 25, gender: 'Male'};
    const person2 = { name: 'Somename', gender: 'Male'};

    expect(compareObjects(person, person2)).toBe(false);
  })

  it('return false if one of values is not the same', () => {
    const person = { name: 'Somename', age: 25, gender: 'Male'};
    const person2 = { name: 'Somename', age: 55, gender: 'Male'};

    expect(compareObjects(person, person2)).toBe(false);
  })

  it('return false if one of keys is not the same', () => {
    const person = { name: 'Somename', age: 25, gender: 'Male'};
    const person2 = { name1: 'Somename', age: 55, gender: 'Male'};

    expect(compareObjects(person, person2)).toBe(false);
  })

  it('return false if one of values is number and other is string', () => {
    const person = { name: 'Somename', age: 25, gender: 'Male'};
    const person2 = { name: 'Somename', age: '25', gender: 'Male'};

    expect(compareObjects(person, person2)).toBe(false);
  })

  it('return true if some string in other case (case insensitive comparison)', () => {
    const person = { name: 'Somename', age: 25, gender: 'Male'};
    const person2 = { name: 'somename', age: 25, gender: 'male'};

    expect(compareObjects(person, person2)).toBe(true);
  })


})