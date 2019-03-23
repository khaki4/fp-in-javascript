// Associative Property

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(
  repeat,
  exclaim,
  scream,
);

const str = 'I love egghead';

console.log(withExuberance(str));

const repeatExcitedly = compose(repeat, exclaim);

console.log(compose(repeatExcitedly, scream)(str));


const screamLoudly = compose(exclaim, scream);
