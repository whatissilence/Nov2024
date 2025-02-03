
const emptyArr = (new Array(10)).fill(null);
// emptyArr.forEach(v => {
//   console.log(v);
// })

const arrToSort = [1, 2, 105, 15, 202, 22, -201];
// console.log(arrToSort);

function sortFunc(next, prev) {
  // console.log(`prev: ${prev}, next: ${next}`);

  if (next > prev) {
    return 1;
  }

  if (next < prev) {
    return -1;
  }

  if (next === prev) {
    return 0;
  }
}

const sortFuncShort = (n, p) => n - p;
// console.log(arrToSort.sort(sortFuncShort));

const persons = [
  {
    name: 'Mary',
    email: 'mary@gmail.com',
  },
  {
    name: 'Kevin',
    email: 'kevin@gmail.com',
  },
  {
    name: 'John',
    email: 'john@gmail.com',
  }
];
//
// persons.sort((nextObj, prevObj) => {
//   if (nextObj.name > prevObj.name) {
//     return 1;
//   } else if (nextObj.name < prevObj.name) {
//     return -1;
//   }
//   return 0;
// });
//
// console.log(persons);

const personNamesGreetings = persons.map(obj => obj.name + ', sir or madam!');
// console.log(personNamesGreetings);

const marriesWithGmail = persons.find(obj => obj.name === 'Mary' && obj.email.includes('gmail.com'));

// generate from 1 to 10
const digits = (new Array(10)).fill(null).map((val, ind) => ind + 1);
const testCustomers = (new Array(10)).fill(null).map((val, ind) => ({
  name: `customer${ind}`,
  email: `cust${ind}@gmail.com`
}));

const filteredCustomers = testCustomers.filter(cust => cust.name.includes('2') || cust.name.includes('8'));
filteredCustomers[0].email = 'cust666@gmail.com'; // Changed BOTH in customers filteredCustomers AND testCustomers

const password = 'asdjkhfsakljdhfklashdfklhsadklfhalkjsdhfkjlahsdklfhasdkfhlkjasdjhflakhdslkf';
let isBigLettersInPassword = password.split('').some(v => v === v.toUpperCase());

// =======================================


let kevin = persons[1];
let kevin2 = JSON.parse(JSON.stringify(kevin));
let kevin3 = structuredClone(kevin);























