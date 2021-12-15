function analogMap(array, callback) {
  const newArray = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-undef
    item = array[i];
    // eslint-disable-next-line no-undef
    newArray[i] = callback(item, i, array);
  }

  return newArray;
}

module.exports = analogMap;
