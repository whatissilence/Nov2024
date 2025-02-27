

export function sum(a, b) {
  if(typeof a === "undefined" && typeof b === "undefined") {
    throw new Error('Expected 2 numbers as parameters');
  }

  const result = Number(a) + Number(b);
  console.log(`Hello, ${user.name}, result: ${result}`);

  return result;
}


export function mult(a, b) {
  if(typeof a === "undefined" && typeof b === "undefined") {
    throw new Error('Expected 2 numbers as parameters');
  }

  return a * b;
}

export function getUserJohn() {
  return {
    name: "John",
    email: "john@example.com",
  };
}

export function getObjectCoords(x) {
  let result = x;
  if (result < 0) {
    result = 0;
  } else if (result > window.innerWidth) {
    result = window.innerWidth;
  }

  return result;
}

// імітація що в мене є
export const axios = {
  get: (nick) => {
    // тут платний виклик на сервер
    console.log('AAAAAA MY MONEY!!!!!! -10$');
    return {
      user: 'Sarah Connor ' + nick
    }
  }
};

export function getUser(nick) {
  const response = axios.get(nick)
  return response.user;
}


// console.log(sum(2,5));
// console.log(sum(10, 100));