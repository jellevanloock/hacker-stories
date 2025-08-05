// class declaration
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ` ` + this.lastName;
  }
}

// class instantiation
const jelle = new Person(`Jelle`, `Van Loock`);
console.log(jelle.getName());

// another class instantiation
const robin = new Person(`Robin`, `Wieruch`);
console.log(robin.getName());
