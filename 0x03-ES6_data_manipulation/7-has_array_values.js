/**
 * Function to check if all elements in the array exist within the set.
 *
 * @param {Set} set - The set of elements.
 * @param {Array} arr - The array of elements to check.
 * @returns {boolean} - True if all elements in the array exist in the set, otherwise false.
 */
export default function hasValuesFromArray(set, arr) {
  // Check if every element in the array is present in the set
  return arr.every((element) => set.has(element));
}
