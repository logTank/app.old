/// <reference path="../index.d.ts" />

'use strict';
angular.module('app')
  .directive('serverError', () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
          element.on('keydown', function() {
            ctrl.$setValidity('server', true)
          });
        }
    }
  });