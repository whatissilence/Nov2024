'use strict';
//
// function makeClicker() {
//   let clickCount = 0;
//   console.log('Making clicker', clickCount);
//
//   function addClick() {
//     clickCount = clickCount + 1;
//     return clickCount;
//   }
//
//   return addClick;
// }
//
// let likeMe = makeClicker();
//
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());
//
// let dislikeMe = makeClicker();
//
// console.log('Dislike!', dislikeMe());
// console.log('Dislike!', dislikeMe());
// console.log('Dislike!', dislikeMe());
//
//
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());
// console.log('Like!', likeMe());

// ===============================================
//
// function makeDoubleClicker() {
//   let clickCount = 0;
//   console.log('Making double clicker', clickCount);
//
//   function plus() {
//     clickCount = clickCount + 1;
//     return clickCount;
//   }
//
//   function minus() {
//     clickCount = clickCount - 1 < 0 ? 0 : clickCount - 1;
//     return clickCount;
//   }
//
//   function getCount() {
//     return clickCount;
//   }
//
//   const counterObj = {
//     like: plus,
//     dislike: minus,
//     amount: getCount,
//   };
//
//   return counterObj;
// }
//
// const reaction = makeDoubleClicker();
//
// console.log('reaction.like', reaction.like());
// console.log('reaction.like', reaction.like());
// console.log('reaction.like', reaction.like());
// console.log('reaction.like', reaction.like());
// console.log('====');
// console.log('reaction.like', reaction.dislike());
// console.log('reaction.like', reaction.dislike());
// console.log('reaction.like', reaction.dislike());
// console.log('reaction.like', reaction.dislike());
// console.log('reaction.like', reaction.dislike());
// console.log('reaction.like', reaction.dislike());
// console.log('====');
//
// console.log('reaction.get', reaction.amount());
// console.log('reaction.get', reaction.amount());
// console.log('reaction.get', reaction.amount());
// console.log('reaction.get', reaction.amount());


// ================================

// function makeThreeCalls(){
//   for (var i = 0; i <= 2; i++){
//
//     const showMe = function (){
//       console.log(i);
//     }
//
//     setTimeout(showMe, 3000);
//   }
//   console.log("Learn");
// }
//
// makeThreeCalls();

// ================================

const personJohn = {
  name: "John",
  secondName: "Wick",
  email: "john@gmail.com",
  password: "password",
  age: 30,
};

const personMary = {
  name: "Mary",
  secondName: "Poppins",
  email: "wind_of_change@gmail.com",
  password: "password",
  age: 22,
  greetArr: () => {
    console.log(this);
  }
};

function hello(favouriteSmth, a, b, c) {
  console.log(`Hello, I'm ${this.name} ${this.secondName}. I'm ${this.age} years old.`);

  const arr = () => {
    console.log('IN ARR', this);
  }

  arr();

  if (favouriteSmth) {
    console.log(`I like my ${favouriteSmth}`, a, b, c);
  }
}

personJohn.greeting = hello;
personMary.greeting = hello;

personJohn.greeting('Dog');
personMary.greeting('Umbrella');


// hello.call(personJohn, 'Dog');
// hello.call(personMary, 'Umbrella', 1, 2, 3);
// hello.apply(personJohn, ['Umbrella', 1, 2, 3]);

// const maryGreetings = hello.bind(personMary, 'Umbrella');
//
// maryGreetings(77, 88, 99);

// setTimeout( hello.bind(personMary) , 5000);

personMary.greetArr();
console.log(this);




