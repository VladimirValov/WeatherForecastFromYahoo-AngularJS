angular.
  module('api-yahoo').
    factory('YahooWeather', ['$resource',
      function($resource) {
        let urlApi = 'https://query.yahooapis.com/v1/public/yql?q=' +
          'select * from weather.forecast where woeid = ' + ':woeid' +
            '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';


            //Comment this for get data fromAPI
            //urlApi = 'API-QUERY.json';


        return $resource(urlApi, {woeid : '2028717' }, {
          query: {
            method: 'GET',
            params: {woeid: '2028717'},
            isArray: true
          },
          get: {
            method: 'GET'
            //,
            //headers: {
            //  "client_id": "dj0yJmk9d1FEQ1lBUkJFaHhtJmQ9WVdrOVpFMVFWVWR3TlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1lZg--",
            //  "client_secret": "eb713f09384f66814dc7a450eb6dc6d3692d7a1d"
             //}
          }
        });
      }
  ]);
