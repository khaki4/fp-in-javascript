// Debugging compositions

const { compose, map, split, join, lowerCase } = require("./shared");

const trace = msg => x => {
  return console.log(msg, x), x;
};

const bookTitles = [
  "The Culture Code",
  "Designing Your Life",
  "Algorithms to live By"
];

const slugify = compose(
  map(
    compose(
      join("-"),
      split(" "),
      lowerCase
    )
  )
);

const slugs = slugify(bookTitles);

console.log(slugs);
