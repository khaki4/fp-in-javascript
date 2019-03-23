// Mutable = can be changed after creation
// Immutable = can't be changed after creation

const log = (...args) => console.log(...args);

const push = value => arrary =>
  [...arrary].push(value);

const a = [1, 2, 3];
const b = push(4)(a);
console.log(a === b);

////////////////////////////////////////////////////////

class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}

const mg1 = new MutableGlass('water', 100);
const mg2 = mg1.takeDrink(20);
// log(mg1 === mg2)
// log(mg1.amount === mg2.amount);




class ImutabbleGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImutabbleGlass(this.content, Math.max(this.amount - value, 0));
  }
}

const ig1 = new ImutabbleGlass('water', 100);
const ig2 = ig1.takeDrink(20);
log(ig1 === ig2);
log(ig1.amount === ig2.amount);