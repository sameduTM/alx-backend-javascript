export const weakMap = new WeakMap();

/**
 * Function to track the number of times an endpoint is queried.
 *
 * @param {Object} endpoint - The endpoint object with protocol and name properties.
 * @throws {Error} - Throws an error if the number of queries is >= 5 for an endpoint.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
