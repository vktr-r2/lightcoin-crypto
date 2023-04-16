// Here's a list of features that our code needs to support:

// Allow multiple accounts to be created  >> create a method
// Each account can have many transactions >> create a method
// Allow withdrawals and deposits into accounts >> create a method
// Allow us to retrieve the transaction history of an account (all withdrawals and deposits) >> create a method
// Allow us to retrieve the current balance of the account at any time >> create a method
// Don't allow withdrawals that exceed the remaining balance of the account >> create a method



class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}



class Deposit extends Transaction {

  get value () {
    return this.amount;
  }

}



class Withdrawal extends Transaction {

  get value () {
    return -this.amount;
  }

}


class Account {

  constructor(username) {
    this.username = username;
    //Account balance starts at zero when introduced
    this.balance = 0;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("Chequing");

console.log("Starting Balance:", myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);
