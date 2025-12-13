# javaScript and classes...

## OOPS

## object

- collection of properties and methods
- toLowerCase


## why use OOP
## parts of OOP
object literal

- Constructor function
-Prototypes
-Classes
-Instance


## 4 pillars..

1. Abstraction - Abstraction means showing only what is necessary and hiding the internal details.
example:
class Car {
  start() {
    this.#startEngine();
  }

  #startEngine() {
    console.log("Engine started");
  }
}

const myCar = new Car();
myCar.start();

Explanation:✔ User calls only start()
✔ Internal method #startEngine() is hidden
➡️ Abstraction achieved



2. Encapsulation- Encapsulation means wrapping data (variables) and methods (functions) together in one unit and restricting direct access to that data.
example;
class BankAccount {
  #balance = 0; // private variable

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(5000);
console.log(acc.getBalance()); // 5000
explanation: 
✔ #balance is private
✔ Cannot be accessed directly
✔ Data is safe



3. Inheritance-
4. Polymorphism-