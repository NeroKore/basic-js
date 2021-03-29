const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let current_Depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        current_Depth += this.calculateDepth(arr[i]);
      }
      if (current_Depth > depth) {
        depth = current_Depth;
      }
      current_Depth = 1;
    } let output = depth;
    return output;
  }
};