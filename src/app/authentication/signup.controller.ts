/// <reference path="../index.d.ts" />

'use strict';

module app {
  export interface ISignupScope {
    email: string;
    password: string;

    signup(): void;
  }

  export class SignupCtrl {
    /* @ngInject */
    constructor (private $scope: ISignupScope,  
                 private $auth) {
 
      $scope.signup = () => {
        var user = {
          email: $scope.email,
          password: $scope.password
        };

        // Satellizer
        $auth.signup(user)
          .catch(function(response) {
            console.log(response.data);
          });
      };
    }
  }
}