export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (const idx of newArray) {
    const value = newArray.indexOf(idx);
    newArray[value] = appendString + idx;
  }
  return newArray;
}
