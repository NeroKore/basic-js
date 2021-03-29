const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )` || `( ( ) )`);
    return this;
  },
  removeLink(position) {
    if (!position || position % 1 != 0) {
      this.array = [];
      throw new Error(CustomError);
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const a = this.array.join("~~");
    this.array = [];
    return a;
  }
};

module.exports = chainMaker;
