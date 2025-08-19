module.exports = function calculateNumber(type, a, b) {
  const roundeda = Math.round(a);
  const roundedb = Math.round(b);
  switch (type) {
    case 'SUM':
      return roundeda + roundedb;
    case 'SUBTRACT':
      return roundeda - roundedb;
    case 'DIVIDE':
      if (roundedb === 0) {
        return 'Error';
      }
      return roundeda / roundedb;
    default:
      return NaN;
  }
};
