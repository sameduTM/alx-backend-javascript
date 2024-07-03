/**
 * Function to update the quantities of items in a map.
 * For each entry of the map where the quantity is 1, update the quantity to 100.
 *
 * @param {Map} map - The map of items to update.
 * @returns {Map} - The updated map with modified quantities.
 * @throws {Error} - Throws an error if the argument is not a map.
 */
export default function updateUniqueItems(map) {
  // Check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map and update quantities
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
