import { jest } from '@jest/globals';

import { sum, mult, getUserJohn, getObjectCoords, getUser, axios } from "./script.js";

describe("function sum", () => {
  beforeEach(() => {
    global.user = {
      name: "John",
      email: "john@example.com",
    }
  })

  it("should return sum of arguments", () => {
    const consoleSpy = jest.spyOn(console, 'log');

    expect(sum(1, 5)).toBe(6);
    expect(consoleSpy).toBeCalledWith('Hello, John, result: 6');
  });

  it("should return sum of negative arguments", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    expect(sum(-10, -5)).toBe(-15);
    expect(consoleSpy).toBeCalledWith('Hello, John, result: -15');
  });

  it("should return NaN for text argument which cannot be casted", () => {
    expect(sum('Str', 5)).toBeNaN();
  });

  it("should return sum for text argument which can be casted", () => {
    expect(sum('5', 5)).toBe(10);
  });

  it("should return NaN for no arguments passed", () => {
    expect(() => {
      sum();
    }).toThrow('Expected 2 numbers as parameters');
  })

  afterEach(() => {
    jest.clearAllMocks();
  })
})

describe("function mult", () => {
  it("should return multiplication of arguments", () => {
    expect(mult(2, 5)).toBe(10);
  });

  it("should return multiplication of negative arguments", () => {
    expect(mult(-10, -5)).toBe(50);
  });

  describe("function mult for NaN", () => {
    it("should return NaN for text argument which cannot be casted", () => {
      expect(mult('Str', 5)).toBeNaN();
    });

    it("should return multi for text argument which can be casted", () => {
      expect(mult('5', 5)).toBe(25);
    });

    it("should return NaN for no arguments passed", () => {
      expect(() => {
        mult();
      }).toThrow('Expected 2 numbers as parameters');
    })
  })
})

describe("function getUserJohn", () => {
  it("should return user", () => {
    expect(getUserJohn()).toEqual({
      name: "John",
      email: "john@example.com"
    });
  })
})

describe("function getObjectCoords", () => {
  it("should return object width on screen", () => {
    global.window = {
      innerWidth: 500,
      alert: jest.fn(x => x)
    }

    expect(getObjectCoords(10)).toBe(10);
  })
})


describe("function getUser", () => {
  it("should return user from request", () => {

    axios.get = jest.fn(() => {
      console.log('WE ARE SAVING MONEY!')
      return {
        user: 'Sarah Kerrigan'
      }
    });


    expect(getUser('sarah')).toBe('Sarah Kerrigan');
    expect(getUser('parker')).toBe('Sarah Kerrigan');

    // console.dir(axios.get.mock, {depth: null});
    expect(axios.get.mock.calls).toHaveLength(2); // довжина масиву 2
    expect(axios.get.mock.calls[1][0]).toBe('parker'); // при другому виклику мока перший аргумент паркер

  })
})

