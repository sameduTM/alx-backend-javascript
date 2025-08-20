const Utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const getSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${getSum}`);
};
