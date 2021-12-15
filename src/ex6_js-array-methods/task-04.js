function analogFilter(array, callback) {
  const newArray = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-undef
    item = array[i];

    // eslint-disable-next-line no-undef
    if (callback(item, i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = analogFilter;
