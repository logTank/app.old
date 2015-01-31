/// <reference path="./index.d.ts" />

'use strict';

module app {
  angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'satellizer', 'ngMessages'])
    .controller('MainCtrl', MainCtrl)
    .controller('LoginCtrl', LoginCtrl)
    .controller('SignupCtrl', SignupCtrl)
    .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider: ng.ui.IStateProvider, 
                    $urlRouterProvider: ng.ui.IUrlRouterProvider, 
                    $authProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('notAuthenticated', {
        url:'/login',
        templateUrl:'app/authentication/login.html',
        controller: 'LoginCtrl'
      })
      .state('notAuthorised', {
        url:'/signup',
        templateUrl:'app/authentication/signup.html',
        controller:'SignupCtrl'
      });

    $urlRouterProvider.otherwise('/');

    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
    $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryColor('blue-grey', {
        'default': '500'
      })
      .accentColor('lime', {
        'default': '500' // use shade 500 for default, and keep all other shades the same
      });
  });
}
