'use strict'

class Thermostat {

  constructor(){
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.isPowerSavingMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
  };

  getCurrentTemperature(){
    return this.temperature;
  }

  up(){
    if (this.isMaximumTemperature()){
      return;
    }
    this.temperature += 1;
  }

  down(){
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  }

  isMinimumTemperature(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isPowerSavingModeOn(){
    return this.isPowerSavingMode === true;
  }

  switchPowerSavingModeOff(){
    this.isPowerSavingMode = false;
  }

  switchPowerSavingModeOn(){
    this.isPowerSavingMode = true;
  }

  isMaximumTemperature(){
    if(this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

};
