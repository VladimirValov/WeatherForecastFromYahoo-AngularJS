'use strict';

angular.
  module('weatherForecast').
  component('weatherForecast', {
    templateUrl: 'weather-forecast/weather-forecast.template.html',
    controller: function weatherForecast() {
      this.currrentCity = "Краснодар";
    }
  });
