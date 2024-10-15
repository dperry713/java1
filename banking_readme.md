# Simple Banking Application

This JavaScript program simulates a basic banking application, allowing users to create accounts, manage funds, and calculate interest.

## Features

- Create bank accounts with account number, initial balance, and owner information
- Deposit funds into accounts
- Withdraw funds from accounts
- Calculate compound interest based on account balance and specified rate

## Usage

To use this banking application, follow these steps:

1. Include the `banking.js` file in your project.
2. Create a new account using the `Account` constructor:

```javascript
const myAccount = new Account("123456", 1000, "John Doe");
