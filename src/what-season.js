const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) {
    return "Unable to determine the time of year!";
  }
  const month = Date.prototype.getMonth.call(date);
  let season = (1 < month && month <= 4) ? "spring" : 
  (4 < month && month <= 7) ? "summer" : 
  (7 < month && month <= 10) ?  "autumn" : 
  (month === 11 || month === 0 || month === 1) ? "winter" : "Unable to determine the time of year!";
  return season;
};
