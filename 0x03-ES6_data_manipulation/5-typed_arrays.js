/**
 * Function to create a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position to add the Int8 value.
 * @param {number} value - The Int8 value to add.
 * @returns {ArrayBuffer} - The new ArrayBuffer with the Int8 value at the specified position.
 * @throws {Error} - Throws an error if the position is outside the valid range.
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value);

  return buffer;
}
