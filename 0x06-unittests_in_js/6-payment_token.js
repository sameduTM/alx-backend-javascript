/* eslint-disable */
module.exports = function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return new Promise((resolve) => resolve(
      { data: 'Successful response from the API' },
    ));
  }
};
