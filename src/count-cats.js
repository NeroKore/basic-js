const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cc = 0;
  for(let item of matrix){
    for(let cats of item)
      {
        if(cats === '^^'){
          cc++;
        }
      }
  } return cc;
};
