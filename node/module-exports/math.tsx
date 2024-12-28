const { PI } = Math;

const square = (x) => x * x;
const area = (r) => PI * square(r);

const mathMethods = {
  square,
  area,
};

module.exports = mathMethods;
