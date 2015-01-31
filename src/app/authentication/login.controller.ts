/// <reference path="../index.d.ts" />

'use strict';

module app {
  export interface ILoginScope {
  	email: string;
  	password: string;
    errorMessage: any;
    loginForm: any;

    emailLogin(): void;
  }

  export interface ILogTankRootScope extends ng.IRootScopeService {
  	currentUser: any;
  }

	export class LoginCtrl {
    /* @ngInject */
    constructor (private $scope: ILoginScope, 
    						 private $window: ng.IWindowService, 
                 private $rootScope: ILogTankRootScope,
                 private $auth) {

  	$scope.emailLogin = () => {
      $auth.login({ email: $scope.email, password: $scope.password })
        .then(function(response) {
          $window.localStorage['currentUser'] = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage['currentUser']);
        })
        .catch(function(response) {
          $scope.errorMessage = {};
          angular.forEach(response.data.message, function(message, field) {
          	$scope.loginForm[field].$setValidity('server', false);
          	$scope.errorMessage[field] = response.data.message[field];
      		});
     		});
     	};
    }
  }
}
