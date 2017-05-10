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
        this.status = "Data loading from Yahoo";
        this.attempt = 1;  //Попытка получения данных

        //Data Forecast from Api
        this.channel;


        this.GetWeatherFromYahoo = function( woeidCurrent = this.chosenCity ) {
          console.log("woeidCurrent =" + woeidCurrent);

          var self = this;
          self.status = self.attempt + " Request the data from Yahoo Weather";

          YahooWeather.get({woeid : woeidCurrent },
            function(data) {
              if(data.query.results) {
                self.channel = data.query.results.channel;
                self.attempt = 1;

                console.log("Получены корректные данные");
                self.status = self.channel.lastBuildDate;
                console.log(self.channel);
              }
              else {
                console.log("Сервис данные не предоставил");
                self.attempt ++;
              //  self.status = "Re-request the data from Yahoo Weather";

                self.GetWeatherFromYahoo(self.chosenCity);
              }
            }
          );
        }

        //Default Krasnodar
        this.GetWeatherFromYahoo();
    }]
  });
