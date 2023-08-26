abstract class Vehicle {
  abstract details(): string
}

class Car extends Vehicle {
  details(): string {
    return 'Automovil'
  }
}

class Truck extends Vehicle {
  details(): string {
    return 'Camion'
  }
}

class Bus extends Vehicle {
  details(): string {
    return 'AutoBus'
  }
}

interface VehicleFactory {
  createVehicle(): Vehicle
}

class CarFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new Car()
  }
}

class TruckFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new Truck()
  }
}

class BusFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new Bus()
  }
}

function createVehicle(factory: VehicleFactory) {
  const vehicle = factory.createVehicle()
  console.log(vehicle.details())
}

createVehicle(new CarFactory())
createVehicle(new TruckFactory())
createVehicle(new BusFactory())
