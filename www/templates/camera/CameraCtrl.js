/**
 * Created by jodeng on 15. 8. 11..
 */
(function(app){
    "use strict";
    app.controller('CameraCtrl', ['$scope', '$ionicPopup', 'Toast', '$cordovaFlashlight', function($scope, $ionicPopup, Toast, $cordovaFlashlight){

      $scope.onFlash = function(){

        $cordovaFlashlight.switchOn()
          .then(
            function (success) { Toast.show('flash on') },
            function (error) { Toast.show('Error! flash on') });
      }

      $scope.offFlash = function(){
        $cordovaFlashlight.switchOff()
          .then(
            function (success) { Toast.show('flash off'); },
            function (error) { Toast.show('Error! flash off'); });
      }

    }]);
}(app));