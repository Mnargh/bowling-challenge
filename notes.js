// example of dependency injection in javascript

function Engine(hp) {
   this.hp = hp;
 }

 Engine.prototype.start = function () {
   console.log("Engine with " + this.hp + " hp has been started...");
 }

 function Car(name, engine) {
   this.name = name;
   this.engine = engine;
 }

 Car.prototype.start = function () {
   if (this.engine) {
     this.engine.start();
   }
 }

 function Driver(name, car) {
   this.name = name;
   this.car = car;
 }

 Driver.prototype.drive = function () {
   if (this.car) {
      this.car.start();
   }
 }

 var driver = Driver("tom");
 driver.car = new Car("wv", new Engine(256)));
 driver.drive();

 // Engine with 256 hp has been started...
