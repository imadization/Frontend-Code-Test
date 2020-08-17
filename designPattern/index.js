const vehicleFactory = require('./vehicleFactory');

const myCar = vehicleFactory.createVehicle('Car', {
  set_num_of_wheels: 4,
  set_num_of_passengers: 4,
  has_gas: true,
});
const myPlane = vehicleFactory.createVehicle('Plane', {
  set_num_of_wheels: 6,
  set_num_of_passengers: 200,
  has_gas: true,
});

console.log(myCar);
console.log(myPlane);
