export default function appendToEachArrayValue(array, appendString) {
  // const newArray = array;
  for (const idx of array) {
    const value = array.indexOf(idx);
    array[value] = appendString + idx;
  }
  return array;
}
