/**
 * Function to return a string of all set values that start with a specific string.
 *
 * @param {Set} set - The set of elements.
 * @param {string} startString - The string to check at the beginning of each set value.
 * @returns {string} - A string of the remaining parts of set values starting with startString,
 * joined by hyphens.
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
