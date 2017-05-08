'use strict';

angular.
  module('weatherForecast').
  component('weatherForecast', {
    templateUrl: 'weather-forecast/weather-forecast.template.html',
    controller: ['YahooWeather',
      function WeatherForecast(YahooWeather) {
      //  this.currentCity = "Краснодар";

        var self = this;

        this.api = YahooWeather.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
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

      console.log( self.api );


    }]
  });
