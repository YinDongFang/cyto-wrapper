const getCurrentTimestamp = require('./getCurrentTimestamp')
const factorial = require('./factorial')
const getRandomInt = require('./getRandomInt')
const shuffleArray = require('./shuffleArray')
const isOddNumber = require('./isOddNumber')

module.exports = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }