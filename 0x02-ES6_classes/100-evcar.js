import Car from './10-car.js';

/**
 * Symbol for accessing private properties.
 */
const _range = Symbol('range');

/**
 * Class representing an Electric Vehicle (EV) Car.
 */
class EVCar extends Car {
  /**
   * Create an EV Car.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor type of the car.
   * @param {String} color - The color of the car.
   * @param {String} range - The range of the EV car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  /**
   * Get the range of the EV car.
   * @returns {String} The range of the EV car.
   */
  get range() {
    return this[_range];
  }

  /**
   * Clone the car and return a new instance of Car (not EVCar).
   * @returns {Car} A new Car instance with the same attributes.
   */
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}

export default EVCar;
