const Car = require('./car');
const Plane = require('./plane');

const vehicle = { Car, Plane };

module.exports = {
  createVehicle(type, attributes) {
    const VehicleType = vehicle[type];

    return new VehicleType(attributes);
  },
};
