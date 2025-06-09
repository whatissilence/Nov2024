import { add } from './add.js';


describe('Test Add function', () => {
  test('додає 1 + 2, щоб отримати 3', () => {
    expect(add(1, 2)).toBe(3);
  });


  test('додає 5 + 8, щоб отримати 13', () => {
    expect(add(5, 8)).toBe(13);
  });
})