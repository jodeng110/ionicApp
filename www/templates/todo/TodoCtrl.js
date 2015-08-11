/**
 * Created by kimsuho on 15. 8. 1..
 */
(function(app){
    "use strict";
    app.controller('TodoCtrl', function($scope, Toast, $http){
        $scope.people = [
            {name: 'suho',age: 31},
            {name: 'nayeon', age: 27},
            {name: 'dfefe', age : 30},
            {name: 'afdazf', age: 25}
        ];
        $scope.listCanSwipe = true;

        $scope.share = function(p){
            alert(p.name + ': '+ p.age);
        };
        $scope.edit = function(p){
            alert(p.name + ': '+ p.age);
        };
        $scope.hahaha = function(str){
            Toast.show(str);
        };

        $scope.toast = function(msg){
            Toast.show(msg);
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=8d554a626fc5d01d77812b612a6de257', {}).success(function(res){
                console.log(res);
            }).error(function(err){
                console.log(err);
            });
        };
    });
}(app));