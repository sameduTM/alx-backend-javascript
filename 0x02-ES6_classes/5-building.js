export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof evacuationWarningMessage !== 'function') {
        this.evacuationWarningMessage();
      }
    }
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Setter
  set sqft(sqft) {
    this._sqft = sqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
