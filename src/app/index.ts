/// <reference path="../../bower_components/dt-angular/angular.d.ts" />

'use strict';

module app {
  angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)
    
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryColor('blue-grey')
      .accentColor('lime', {
        'default': '500' // use shade 500 for default, and keep all other shades the same
      });
  });
;
}
