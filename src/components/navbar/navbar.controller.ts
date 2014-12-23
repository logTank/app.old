'use strict';

module gulpAngular {

  export interface INavbarScope extends ng.IScope {
    date: Date
  }

  export class NavbarCtrl {
    constructor ($scope: INavbarScope) {
      $scope.date = new Date();
    }
  }

  NavbarCtrl.$inject = ['$scope'];
}
