/**
 * Class representing a Holberton class.
 */
class HolbertonClass {
  /**
   * Create a Holberton class.
   * @param {Number} size - The size of the class.
   * @param {String} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Get the size of the class.
   * @returns {Number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Get the location of the class.
   * @returns {String} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Cast the class into a Number, returning the size.
   * @returns {Number} The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * Cast the class into a String, returning the location.
   * @returns {String} The location of the class.
   */
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
