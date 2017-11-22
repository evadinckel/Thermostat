function Thermostat (){
  this.temperature = 20;
  this.minTemperature = 10;
  this.isSavingPower = true;
}

Thermostat.prototype.increase = function(number){
  if (this.isSavingPower && this.temperature + number > 25){
    return 'Selected temperature higher than 25 degrees';
  } else if(!this.isSavingPower && this.temperature + number > 32){
    return 'Selected temperature higher than 32 degrees';
  }
  this.temperature += number;
};

Thermostat.prototype.decrease = function(number){
  if (this.temperature - number < 10) {
    return 'Selected temperature lower than 10 degrees';
  }
  this.temperature -= number;
};

Thermostat.prototype.reset = function (){
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < 18) return 'low-usage';
  if(this.temperature > 25) return 'high-usage';
  return 'medium-usage';
};
