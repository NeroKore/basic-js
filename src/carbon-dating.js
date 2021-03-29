const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || Number.isNaN(+sampleActivity) ||  +sampleActivity < 0) { return false;}
  let a = (((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD)));
  return (Number.isNaN(a) || a < 0 || !isFinite(a)) ? false : Math.ceil(a);
};
