/// <reference path="../index.d.ts" />

'use strict';

module app {

  export interface INavbarScope extends ng.IScope {
    date: Date
  }

  export class NavbarCtrl {
    /* @ngInject */
    constructor ($scope: INavbarScope) {
      $scope.date = new Date();
    }
  }

}
