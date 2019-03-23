// Curring

const log = (...args) => console.log(...args);

const add = x => y => x + y;

const addThree = add(3);

log(addThree(4))


/**
 * Arity.
 *
 * Arity describes the number of arguments a function number it receives.
 */

// 1 = unary
// 2 = binary
// 3 = ternary
// 4 = quternary