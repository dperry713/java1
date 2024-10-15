// Task 1: Create a constructor function for the Account object
function Account(accountNumber, initialBalance, owner) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.owner = owner;
  
    // Task 2: Implement deposit method
    this.deposit = function(amount) {
      if (amount > 0) {
        this.balance += amount;
        return `Deposited ${amount}. New balance: ${this.balance}`;
      }
      return "Invalid deposit amount";
    };
  
    // Task 2: Implement withdraw method
    this.withdraw = function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawn ${amount}. New balance: ${this.balance}`;
      }
      return "Insufficient funds or invalid withdrawal amount";
    };
  
    // Task 3: Implement compound interest calculation method
    this.calculateInterest = function(rate, time) {
      const principal = this.balance;
      const amount = principal * Math.pow((1 + rate / 100), time);
      const interest = amount - principal;
      return `Interest earned: ${interest.toFixed(2)}`;
    };
  }
  
  // Example usage
  const account1 = new Account("123456", 1000, "John Doe");
  console.log(account1.deposit(500));
  console.log(account1.withdraw(200));
  console.log(account1.calculateInterest(5, 2)); // 5% interest rate for 2 years
  