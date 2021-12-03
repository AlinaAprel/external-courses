const object = {};

object.name = 'alina';
object.age = 18;
object['likes programming'] = true;

delete object.name;

console.log(object);
