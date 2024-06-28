/**
 * Class representing an airport.
 */
class Airport {
  /**
   * Create an airport.
   * @param {String} name - The name of the airport.
   * @param {String} code - The code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Get the name of the airport.
   * @returns {String} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Get the code of the airport.
   * @returns {String} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Return the default string description of the airport.
   * @returns {String} The airport code.
   */
  toString() {
    return this._code;
  }
}

export default Airport;
