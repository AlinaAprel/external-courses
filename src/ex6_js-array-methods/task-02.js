// Написать функцию-аналог метода some(callback), которая возвращает true,
// если вызов callback вернёт true для какого-нибудь любого элемента array.
// Функция принимает аргументы (array, callback).
// Callback принимает 3 аргумента (item, i, array).

function analogSome(array, callback) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-undef
    item = array[i];

    // eslint-disable-next-line no-undef
    if (callback(item, i, array)) {
      return true;
    }
  }
  return false;
}

module.exports = analogSome;
