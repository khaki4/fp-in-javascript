// Argument Order

// const map = array => cb => array.map(cb);
//
// const arr = [1, 2, 3, 4, 5];
// const doubble = n => n * 2;

// const withArr = map(arr);
//
// console.log(withArr(doubble))
// console.log(withArr(n => n * 3))
// console.log(arr.map(n => n * 4))

const map = cb => array => array.map(cb);

const arr = [1, 2, 3, 4, 5];
const doubble = n => n * 2;


const withDoubble = map(doubble);

console.log(withDoubble(arr))

// Most specific => least specific

const prop = key => obj => obj[key];

const propName = prop('name');

const people = [
  { name: 'Jame' },
  { name: 'Kevin' },
  { name: 'Colin' },
  { name: 'Connan' },
  { name: 'Liam' },
  { name: 'Jacey' },
];

console.log(map(propName), people);