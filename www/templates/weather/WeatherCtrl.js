/**
 * Created by jodeng on 15. 8. 11..
 */
(function(app){
    "use strict";
    app.controller('WeatherCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){

        $scope.cityName = '';
        $scope.countryName = '';
        $scope.weatherList = [];

        var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/city?id=1835848&APPID=4571c4074ee1d915ab33d052fbebdd59'
        $scope.getWeatherInfo = function(){
          $http.get(apiUrl).success(function(res){
            console.info(res);
            $scope.cityName = res.city.name;
            $scope.countryName = res.city.country;
            $scope.weatherList = res.list;
          }).error(function(err){
            console.warn(err);
          });
        }

        $scope.getWeaterInfoByCityName = function(cityName){
          var searchUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;
          $http.get(searchUrl).success(function(res){
            console.info(res);
            $scope.cityName = res.name;
            $scope.humidity = res.main.humidity;
            $rootScope.$broadcast('weather', res);
          }).error(function(err){
            console.warn(err);
          });
        }
    }]);
}(app));