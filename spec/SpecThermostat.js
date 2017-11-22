describe('Thermostat', function(){
var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
});



  describe('intiial properties', function(){
    it('has a temperature defaulted to 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20)
    });
    it('has a minimum temperature of 10 degrees', function(){
      expect(thermostat.minTemperature).toEqual(10)
    });
  });

  describe('It has an up function', function(){
    it('Can increase temperature', function(){
      thermostat.increase(5)
      expect(thermostat.temperature).toEqual(25)
    });
  });

  describe('it has a down function', function(){
    it('can decrease temperature', function(){
      thermostat.decrease(3)
      expect(thermostat.temperature).toEqual(17)
    });
    it('prevents the temperature to go lower than 10 degrees', function(){
      thermostat.decrease(11)
      expect(thermostat.temperature).toEqual(20)
    });
    it('prints a warning message about minimum temperature', function(){
      expect(thermostat.decrease(11)).toEqual('Selected temperature lower than 10 degrees')
    });
  });




});
