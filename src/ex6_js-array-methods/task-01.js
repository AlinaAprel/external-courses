function analogSlice(array, begin, end) {
  this.begin = begin;
  this.end = end;
  const newArray = [];

  if (isNaN(end) || end === undefined) {
    this.end = array.length;
  }

  if ((isNaN(end) || end === undefined) && (isNaN(begin) || begin === undefined)) {
    return array;
  }

  if (begin < 0) {
    this.begin = array.length + begin;
  }

  if (begin < 0 && (isNaN(end) || end === undefined)) {
    return array;
  }

  if (begin < 0 && begin < -(array.length)) {
    this.begin = 0;
  }

  if (end < 0) {
    this.end = array.length + end;
  }

  if (end < begin) {
    this.end = begin;
  }

  if (end > array.length) {
    this.end = array.length;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = this.begin; i < this.end; i++) {
    newArray[i - this.begin] = array[i];
  }

  return newArray;
}

module.exports = analogSlice;
