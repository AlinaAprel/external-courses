function evenAndOdd(arr) {
  let countEven = 0;
  let countOdd = 0;
  let countZero = 0;
  const newArray = [];
  arr.forEach((element) => {
    if (typeof element === 'number' && element !== 0) {
      if (element % 2 === 0) {
        countEven += 1;
      } else if (element % 2 !== 0) {
        countOdd += 1;
      }
    }
    if (element === 0) {
      countZero += 1;
    }
  });
  newArray.push(countEven);
  newArray.push(countOdd);
  newArray.push(countZero);
  return newArray;
}

module.exports = evenAndOdd;
