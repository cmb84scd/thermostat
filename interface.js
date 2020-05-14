$(document).ready(function() {
  let thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
})