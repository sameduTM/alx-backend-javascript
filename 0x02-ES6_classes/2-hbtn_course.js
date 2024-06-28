/**
 * Class representing a Holberton course.
 */
class HolbertonCourse {
  /**
   * Create a course.
   * @param {String} name - The name of the course.
   * @param {Number} length - The length of the course.
   * @param {String[]} students - The students enrolled in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Get the name of the course.
   * @returns {String} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the course.
   * @param {String} value - The name of the course.
   * @throws Will throw an error if the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Get the length of the course.
   * @returns {Number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Set the length of the course.
   * @param {Number} value - The length of the course.
   * @throws Will throw an error if the value is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Get the students enrolled in the course.
   * @returns {String[]} The students enrolled in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Set the students enrolled in the course.
   * @param {String[]} value - The students enrolled in the course.
   * @throws Will throw an error if the value is not an array of strings.
   */
  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
