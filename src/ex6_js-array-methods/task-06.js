/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
function analogReduce(array, callback, initialValue) {
  if (initialValue === undefined) {
    previousValue = array[0];
    initialValue = 0;
    i = 1;
  } else {
    previousValue = initialValue;
    i = 0;
  }

  // eslint-disable-next-line no-plusplus
  for (i; i < array.length; i++) {
    currentItem = array[i];
    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
}

module.exports = analogReduce;
