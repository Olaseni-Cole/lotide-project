const assertEqual = require('./assertEqual');

const eqArrays = function(arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false;
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) return false;
  }
  return true;
};

module.exports = eqArrays;