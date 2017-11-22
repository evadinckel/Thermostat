describe('Thermostat', function(){

  var thermostat;
  thermostat = new Thermostat();

  describe('Knows it\'s initial temperature', function(){
    it('Is defaulted to 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('It has an up function', function(){
    it('Can increase temperature', function(){
      thermostat.increase(5)
      expect(thermostat.temperature).toEqual(25)
    });
  });

});
