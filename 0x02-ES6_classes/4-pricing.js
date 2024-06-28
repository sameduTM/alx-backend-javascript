// Import the Currency class
import Currency from './3-currency.js';

/**
 * Class representing pricing.
 */
class Pricing {
  /**
   * Create a pricing.
   * @param {Number} amount - The amount.
   * @param {Currency} currency - The currency.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Get the amount.
   * @returns {Number} The amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the amount.
   * @param {Number} value - The amount.
   * @throws Will throw an error if the value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Get the currency.
   * @returns {Currency} The currency.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set the currency.
   * @param {Currency} value - The currency.
   * @throws Will throw an error if the value is not an instance of Currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * Display the full price.
   * @returns {String} The price in the format amount currency_name (currency_code).
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Convert the price.
   * @param {Number} amount - The amount.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
