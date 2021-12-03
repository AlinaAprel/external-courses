function deepClone(obj) {
  let clone = null;

  // eslint-disable-next-line no-unused-expressions
  Array.isArray(obj) ? clone = [] : clone = {};

  // eslint-disable-next-line
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = obj[key];
    }
  }

  // eslint-disable-next-line
  for (const key in obj) {
    const isObject = typeof (clone[key]) === 'object' || typeof clone[key] === 'function';
    const isOwnProperty = clone.hasOwnProperty(key);

    if (isObject && isOwnProperty) {
      clone[key] = deepClone(clone[key]);
    }
  }
  return clone;
}

module.exports = deepClone;
