
let accNum = 100; // Це в модулі і не буде експортуватися, ця змінна теж інкапсульована.

export class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountNumber = accNum++;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  static getNextAccountNumber() {
    return accNum;
  }

  showAccountDetails() {
    console.log(`Account Number: ${this.accountNumber}, Name: ${this.accountHolderName}, Balance: ${this.balance}`);
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log(`Insufficient Balance for user ${this.accountHolderName}`);
    }
  }
}