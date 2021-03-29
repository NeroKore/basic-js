const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members || !members.length) return false;
  let a = [];
  members.map(str => {
    if(typeof(str) === 'string' && str !== ''){
      a.push(str.trimLeft()[0].toUpperCase());
    }
  })
  return a.sort().join("");
};
