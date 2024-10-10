export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // check if the endpoint exist in weakMap
  const queryCount = weakMap.get(endpoint) || 0;
  // check if the number of queries is greater than or equal 5 times
  if (queryCount >= 4) { // start from 0 to 4
    throw new Error ('Endpoint load is high')
  }
  // increment query count and update the weakMap
  weakMap.set(endpoint, queryCount + 1);
}
