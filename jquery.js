$( document ).ready(function() {
  thermostat = new Thermostat();

    $( "#increase" ).click(function( event ) {

      alert( "temperature increased" );
      $( thermostat ).increase(2);

    });

});
