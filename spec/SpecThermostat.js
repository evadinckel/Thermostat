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

    it('has a power saving mode', function(){
      expect(thermostat.isSavingPower).toEqual(true)
    });
  });

  describe('It has an up function', function(){
    it('Can increase temperature', function(){
      thermostat.increase(5)
      expect(thermostat.temperature).toEqual(25)
    });

    it('prevents the temperature to go higher than 25 degrees when saving power mode is on', function(){
      thermostat.increase(6)
      expect(thermostat.temperature).toEqual(20)
    });

    it('prints a warning about maximum temperature when saving power mode is on', function(){
      expect(thermostat.increase(6)).toEqual('Selected temperature higher than 25 degrees')
    });

    it('prevents the temperature to go higher than 32 degrees when saving power mode is off', function(){
      thermostat.isSavingPower = false
      thermostat.increase(13)
      expect(thermostat.temperature).toEqual(20)
    });

    it('prints a warning about maximum temperature when saving power mode is off', function(){
      thermostat.isSavingPower = false
      expect(thermostat.increase(13)).toEqual('Selected temperature higher than 32 degrees')
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

  describe('it has a reset option', function(){
    it('resets temperature to 20', function(){
      thermostat.increase(2)
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('it knows its energy usage level', function() {
    it('returns "low-usage" when temperature is lower than 18 degrees', function(){
      thermostat.decrease(3)
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });

    it('returns "high-usage" when temperature is above 25 degrees', function(){
      thermostat.isSavingPower = false
      thermostat.increase(10)
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });

    it('returns "medium-usage" when temperature is between 18 and 25 degrees', function(){
      thermostat.increase(4)
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });
  });
});
