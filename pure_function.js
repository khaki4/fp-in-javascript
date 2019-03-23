// Pure Functions

// f(x) = x + 1;
const f = x => x + 1;

// Ex 1 - Global State
const CONST_OF_ITEM = 17
const cartTotal = quantitiy =>
  CONST_OF_ITEM * quantitiy;

// console.log(cartTotal(2))

// Ex 2 - Same input, different output
const generateID = () =>
  Math.floor(Math.random() * 10000);

const createUser = (name, age) => ({
  id: generateID(),
  name,
  age
});

// console.log(createUser('Kevin', 38))
// console.log(createUser('Kevin', 38))
// console.log(createUser('Kevin', 38))

// Ex. 3 - Side Effects #1
let id = 0;
const createFoodItem = name => ({
  id: ++id,
  name,
});

// console.log(createFoodItem(('CheeseBugers')));
// console.log(createFoodItem(('Fires')));
// console.log(createFoodItem(('MilkSHakes')));

// Ex. 4 - Side Effects #2 - Outside World

const logger = msg => {
  console.log(msg)
};

logger('Hi eggheads');