// Це stairs (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися (не замикання, просто обʼєкт):

const stairs = {
  step: 0,
  up: function () {
    this.step++;
  },
  down: function () {
    this.step--;
  },
  showStep: function () { // показує поточну сходинку
    console.log(this.step);
  }
};

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

stairs.up();
stairs.up();
stairs.down();
stairs.showStep(); // 1

// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

stairs.up().up().down().up().up().up().showStep(); // 5