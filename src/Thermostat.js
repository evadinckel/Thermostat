function Thermostat (){
  this.temperature = 20;
  this.minTemperature = 10;
  this.isSavingPower = true;
}

Thermostat.prototype.increase = function(){
  if (this.isSavingPower && this.temperature === 25){
    return 'Cannot go above 25 degrees when power saving mode is on';
  } else if(!this.isSavingPower && this.temperature === 32){
    return 'Cannot go above 32 degrees';
  }
  this.temperature ++;
};

Thermostat.prototype.decrease = function(){
  if (this.temperature === 10) {
    return 'Cannot go below 10 degrees';
  }
  this.temperature --;
};

Thermostat.prototype.reset = function (){
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < 18) return 'low-usage';
  if(this.temperature > 25) return 'high-usage';
  return 'medium-usage';
};
