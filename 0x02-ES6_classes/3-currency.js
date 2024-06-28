/**
 * Class representing a currency.
 */
class Currency {
  /**
   * Create a currency.
   * @param {String} code - The code of the currency.
   * @param {String} name - The name of the currency.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Get the code of the currency.
   * @returns {String} The code of the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code of the currency.
   * @param {String} value - The code of the currency.
   * @throws Will throw an error if the value is not a string.
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Get the name of the currency.
   * @returns {String} The name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the currency.
   * @param {String} value - The name of the currency.
   * @throws Will throw an error if the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Display the full currency details.
   * @returns {String} The currency details in the format name (code).
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
