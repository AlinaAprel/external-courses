function analogEvery(array, callback) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-undef
    item = array[i];

    // eslint-disable-next-line no-undef
    if (callback(item, i, array) === false) {
      return false;
    }
  }
  return true;
}

module.exports = analogEvery;
