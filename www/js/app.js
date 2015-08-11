/**
 * app.js는 껍데기에 해당하는 모듈을 선언하고(ex. Computer 모듈), 다른 모듈들(ex. RAM, HDD)을 주입 받는다.
 * 혼란을 방지하기 위해 모듈명은 그대로 두었다.
 */
(function(window){
    "use strict";
    window.app = angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova']).run(function($ionicPlatform) {
      /**
       * $ionicPlatform.ready()는 제이쿼리의 $(document).ready와 비슷한 역할
       * 다른 점이라면 $ionicPlatform.ready는 디바이스의 자원이 준비되었을 때 콜백이 호출되고,
       * $(document).ready()는 DOM이 준비되었을 때 콜백이 호출된다.
       */
      $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });

      $ionicPlatform.registerBackButtonAction(function(e){
            console.log(e);
        }, 101);
    }).config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
              url: "/app",
              abstract: true,
              templateUrl: "templates/menu.html",
              controller: 'AppCtrl'
            })
            .state('app.search', {
              url: "/search",
              views: {
                'menuContent': {
                  templateUrl: "templates/search.html"
                }
              }
            })
            .state('app.story', {
              url: "/story",
              views: {
                'menuContent': {
                  templateUrl: "templates/story/story.html",
                  controller: 'StoryCtrl'
                }
              }
            })
            .state('app.todo', {
              url: "/todo",
              views: {
                'menuContent': {
                  templateUrl: "templates/todo/todo.html",
                  controller: 'TodoCtrl'
                }
              }
            })
            .state('app.cameraflash', {
              url: "/cameraflash",
              views: {
                'menuContent': {
                  templateUrl: "templates/camera/camera.html",
                  controller: 'CameraCtrl'
                }
              }
            })
            .state('app.weather', {
                url: '/weather',
                views: {
                    'menuContent':{
                        templateUrl : 'templates/weather/weather.html',
                        controller: 'WeatherCtrl'
                    }
                }
            })

            .state('app.single', {
              url: "/playlists/:playlistId",
              views: {
                'menuContent': {
                  templateUrl: "templates/playlist.html",
                  controller: 'PlaylistCtrl'
                }
              }
            });

      /** 위에 해당되는 url이 아닌 곳으로 접근했을 때 아래 url로 리다이렉트 시킨다. */
        $urlRouterProvider.otherwise('/app/story');
      });
}(window));


