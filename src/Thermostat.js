function Thermostat (){
  this.temperature = 20;
  this.minTemperature = 10;
}

Thermostat.prototype.increase = function(number){
  this.temperature += number;
};

Thermostat.prototype.decrease = function(number){
  if (this.temperature - number < 10) {
    return 'Selected temperature lower than 10 degrees';
  }
  this.temperature -= number;
};
