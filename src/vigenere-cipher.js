const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    let key_code = key.toUpperCase();
    const messageLength = message.length;
    key_code = key_code.repeat(Math.ceil(messageLength / key.length)).split('');
    let code = "";
    for(let i = 0; i < messageLength; i++) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + key_code[0].charCodeAt(0)) % 26) + 65);
        key_code.shift();
      } else {
        code += message.charAt(i);
      }
    }
    if(this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }    
  decrypt(message, key) {
    message = message.toUpperCase();
    let key_code = key.toUpperCase();
    const messageLength = message.length;
    key_code = key_code.repeat(Math.ceil(messageLength / key.length)).split('');
    let code = "";
    for(let i = 0; i < messageLength; i++) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + 26 - key_code[0].charCodeAt(0)) % 26) + 65);
        key_code.shift();
      } else {
        code += message.charAt(i);
      }
    }
    if(this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }
}

module.exports = VigenereCipheringMachine;
