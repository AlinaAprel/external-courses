function cloneObject(obj) {
  // eslint-disable-next-line prefer-object-spread
  return Object.assign({}, obj);
}

module.exports = cloneObject;
