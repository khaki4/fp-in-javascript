// Composition

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(
  repeat,
  exclaim,
  scream
);

console.log(withExuberance('I love fp'));

const pipe = (...fns) => x =>
  fns.reduce((acc, fn) => fn(acc), x);

const withExuberance2 = pipe(
  scream,
  exclaim,
  repeat,
);

console.log(withExuberance2('I love f1p'));