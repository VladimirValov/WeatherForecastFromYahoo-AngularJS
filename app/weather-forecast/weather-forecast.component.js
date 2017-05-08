'use strict';

angular.
  module('weatherForecast').
  component('weatherForecast', {
    templateUrl: 'weather-forecast/weather-forecast.template.html',
    controller: ['YahooWeather',
      function WeatherForecast(YahooWeather) {
        this.cityList = [
          {"name": "Krasnodar","woeid": "2028717"},
          {"name": "Sochi",    "woeid": "2086230"},
          {"name": "Moscow",   "woeid": "2122265"},
          {"name": "New York", "woeid": "2459115"},
          {"name": "Dubai",    "woeid": "1940345"}
        ];
        //City by Default;
        this.chosenCity = this.cityList[0].woeid;

        console.log( this.chosenCity );

        var self = this;

        this.api = YahooWeather.get({city : '2028717' },
          function(data) {
            let channel = data.query.results.channel;

            self.location = channel.location;
            self.currentCity = self.location.city;

            self.forecast = channel.item.forecast;
            self.lastBuildDate = channel.lastBuildDate;
            self.currentWeather = channel.item.condition;
            self.wind = channel.wind;
            self.atmosphere = channel.atmosphere;
            self.astronomy = channel.astronomy;
          }
      );


    }]
  });
