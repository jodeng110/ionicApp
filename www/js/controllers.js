/**
 * AppCtrl 은 루트 컨트롤러이다. 모든 컨트롤러의 $scope 는 AppCtrl의 $scope를 상속 받는다.
 * 혼란을 방지하기 위해 모듈명과 컨트롤러명은 그대로 두었다.
 */
(function(angular, window) {
  "use strict";
  window.starterControllers = angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope, $ionicModal, $timeout, Toast, $http, $window, $log) {
        $scope.$on('weather', function(e, weather){

        $scope.weather = weather;

        console.info('@JJE>> AppCtrl : ', weather);

      });

      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //$scope.$on('$ionicView.enter', function(e) {
      //});

      // Form data for the login modal
      $scope.loginData = {};

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function() {
        $scope.modal.show();
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };
    });
}(angular, window));
