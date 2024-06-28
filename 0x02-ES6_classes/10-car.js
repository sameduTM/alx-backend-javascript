/**
 * Symbol for accessing private properties.
 */
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

/**
 * Class representing a Car.
 */
class Car {
  /**
   * Create a Car.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor type of the car.
   * @param {String} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  /**
   * Get the brand of the car.
   * @returns {String} The brand of the car.
   */
  get brand() {
    return this[_brand];
  }

  /**
   * Get the motor type of the car.
   * @returns {String} The motor type of the car.
   */
  get motor() {
    return this[_motor];
  }

  /**
   * Get the color of the car.
   * @returns {String} The color of the car.
   */
  get color() {
    return this[_color];
  }

  /**
   * Clone the car and return a new instance with the same attributes.
   * @returns {Car} A new Car instance with the same attributes.
   */
  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}

export default Car;
