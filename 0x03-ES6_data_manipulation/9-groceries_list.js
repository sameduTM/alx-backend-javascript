/**
 * Function to create a map of groceries with specified items and quantities.
 *
 * @returns {Map} - A map containing grocery items and their quantities.
 */
export default function groceriesList() {
  // Create a new Map and set the grocery items and their quantities
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
