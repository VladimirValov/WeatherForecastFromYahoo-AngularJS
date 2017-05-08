angular.
  module('api-yahoo').
    factory('YahooWeather', ['$resource',
      function($resource) {
        return $resource('API-QUERY.json', {}, {
          query: {
            method: 'GET'            
          }
        });
      }
  ]);
