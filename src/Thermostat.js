function Thermostat (){
  this.temperature = 20;
}

Thermostat.prototype.increase = function(number){
  this.temperature += number;
};
