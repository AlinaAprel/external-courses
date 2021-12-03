function theSame(array) {
  return array.every((element) => element === array[0]);
}

module.exports = theSame;
