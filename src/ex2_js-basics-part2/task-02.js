function find(arr) {
  let count = 0;
  const array = JSON.stringify(arr);
  JSON.parse(array).forEach((elem) => {
    count += 1;
    console.log(elem);
  });
  console.log(count);
  return count;
}

module.exports = find;
