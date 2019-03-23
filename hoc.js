const withCount = (fn) => {
  let cnt = 0;
  return (...args) => {
    console.log(`Call Count: ${++cnt}`)
    return fn(...args);
  };
}

const add = (x, y) => x + y;

const countedAdd = withCount(add);

console.log(countedAdd(1, 2));
console.log(countedAdd(2, 2));
console.log(countedAdd(4, 2));