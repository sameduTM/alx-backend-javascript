export default class ALXClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    let returnValue = '';
    if (hint === 'number') {
      returnValue = this._size;
    } if (hint === 'string') {
      returnValue = this._location;
    }
    return returnValue;
  }
}
