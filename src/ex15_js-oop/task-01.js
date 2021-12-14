const Candy1 = {
  name: 'alenka',
  weight: 100,
};

const Candy2 = {
  name: 'mask',
  weight: 150,
};

const Candy3 = {
  name: 'cow',
  weight: 200,
};

const Candy4 = {
  name: 'twix',
  weight: 200,
};

const Candy5 = {
  name: 'bounty',
  weight: 250,
};

class Present {
  constructor(arrayCandies) {
    this.arrayCandies = arrayCandies;
    this.weight = 0;
  }
}

Present.prototype.getWeight = function () {
  this.arrayCandies.forEach((candy) => {
    this.weight += candy.weight;
  });

  return this.weight;
};

Present.prototype.sortCandy = function () {
  return this.arrayCandies.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
};

Present.prototype.findByName = function (name) {
  let result;

  this.arrayCandies.forEach((candy) => {
    if (candy.name === name) {
      result = candy;
    }
  });

  return result;
};

const arrayCandies = [];
arrayCandies.push(Candy1);
arrayCandies.push(Candy2);
arrayCandies.push(Candy3);
arrayCandies.push(Candy4);
arrayCandies.push(Candy5);

const present = new Present(arrayCandies);

console.log(present.getWeight());
console.log(present.sortCandy());
console.log(present.findByName('alenka'));
