const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === null) { str = 'null' } else { str = `${str}` }
	options = {
		repeatTimes: 1,
		separator: '+',
		additionSeparator: '|',
		additionRepeatTimes: 1,
		...options
	}
	if (options.addition === null) {
		options.addition = 'null';
	}
	const as = typeof options.addition !== 'undefined' ? Array(options.additionRepeatTimes).fill(`${options.addition}`).join(options.additionSeparator) : '';
	const result = Array(options.repeatTimes).fill(str + as);
	return result.join(options.separator);
};
  