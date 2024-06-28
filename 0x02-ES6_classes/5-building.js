/**
 * Abstract class representing a building.
 */
class Building {
  /**
   * Create a building.
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    this._sqft = sqft;
  }

  /**
   * Get the square footage of the building.
   * @returns {Number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Evacuation warning message.
   * This method must be implemented by any class extending Building.
   * @throws Will throw an error if the method is not overridden.
   */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
