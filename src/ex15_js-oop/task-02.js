const device1 = {
  name: 'kettle',
  isSwitchedOn: true,
  power: 1500,
};

const device2 = {
  name: 'computer',
  isSwitchedOn: false,
  power: 300,
};

const device3 = {
  name: 'television',
  isSwitchedOn: true,
  power: 200,
};

const device4 = {
  name: 'microwave',
  isSwitchedOn: true,
  power: 100,
};

const device5 = {
  name: 'lamp',
  isSwitchedOn: false,
  power: 60,
};

class Room {
  constructor(arrayOfDevices) {
    this.arrayOfDevices = arrayOfDevices;
    this.power = 0;
  }

  getFullPower() {
    this.arrayOfDevices.forEach((device) => {
      if (device.isSwitchedOn === true) {
        this.power += device.power;
      }
    });

    return this.power;
  }

  findByName(name) {
    let result;
    this.arrayOfDevices.forEach((device) => {
      if (device.name === name) {
        result = device;
      } else {
        result = `device ${name} is not found`;
      }
    });

    return result;
  }
}

const arrayOfDevices = [];
arrayOfDevices.push(device1);
arrayOfDevices.push(device2);
arrayOfDevices.push(device3);
arrayOfDevices.push(device4);
arrayOfDevices.push(device5);

const room = new Room(arrayOfDevices);

console.log(room.getFullPower());
console.log(room.findByName('lamp'));
