/// <reference path="../index.d.ts" />

'use strict';

module app {

  export interface INavbarScope extends ng.IScope {
    date: Date
  }

  export class NavbarCtrl {
    /* @ngInject */
    constructor (private $scope: INavbarScope, 
    						 private $rootscope: ILogTankRootScope, 
    						 private $window: ng.IWindowService, 
    						 private $auth) {
      $scope.date = new Date();
      $scope.isAuthenticated = () => {
      	return $auth.isAuthenticated();
      };
      $scope.logout = () => {
      	$auth.logout();
      	delete $window.localStorage.currentUser;
      };
    }
  }
}
