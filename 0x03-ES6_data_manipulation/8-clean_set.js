/**
 * Function to return a string of all set values that start with a specific string.
 *
 * @param {Set} set - The set of elements.
 * @param {string} startString - The string to check at the beginning of each set value.
 * @returns {string} - A string of the remaining parts of set values starting with startString,
 * joined by hyphens.
 */
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const result = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
