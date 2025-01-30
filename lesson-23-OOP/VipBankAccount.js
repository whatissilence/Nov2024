import { BankAccount } from './BankAccount.js';

export class VipBankAccount extends BankAccount {
  #limit = 500;

  constructor(accountHolderName, balance) {
    super(accountHolderName, balance);
  }

  get limit() {
    return this.#limit;
  }

  set limit(value) {
    if(value <= 1000) {
      this.#limit = value;
    } else {
      console.log(`Can't change limit over 1000`);
    }
  }

  withdraw(amount) {
    if (this.balance + this.#limit >= amount) {
      this.balance -= amount;
    } else {
      console.log(`Insufficient Balance for user ${this.accountHolderName}`);
    }
  }
}