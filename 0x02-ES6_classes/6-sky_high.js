import Building from './5-building.js';

/**
 * Class representing a sky-high building.
 */
class SkyHighBuilding extends Building {
  /**
   * Create a sky-high building.
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Get the number of floors.
   * @returns {Number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Evacuation warning message specific to the sky-high building.
   * @returns {String} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;
