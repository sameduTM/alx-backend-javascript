/**
 * Class representing a classroom.
 */
export default class ClassRoom {
  /**
   * Create a classroom.
   * @param {Number} maxStudentsSize - The maximum number of students allowed in the classroom.
   */
  constructor(maxStudentsSize) {
    /**
     * @type {Number}
     * @private
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
