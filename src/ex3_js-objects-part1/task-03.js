function doYouHaveAProperty(str, obj) {
  let result = false;
  if (Object.keys(obj).length !== 0) {
    result = obj.hasOwnProperty(str);
  }
  return result;
}

module.exports = doYouHaveAProperty;
