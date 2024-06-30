export default class Building {
  constructor(sft) {
    this.sft = sft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sft() {
    return this._sft;
  }

  set sft(value) {
    this._sft = value;
  }
}
