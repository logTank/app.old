/// <reference path="../index.d.ts" />

'use strict';

module app {
  export class Thing {
    public rank: number;

    constructor(
      public title: string,
      public url: string,
      public description: string,
      public logo: string
    ) {
      this.rank = Math.random();
    }
  }

  export interface IMainScope extends ng.IScope {
    awesomeThings: Thing[];
    isAuthenticated(): boolean;
    emailLogin(): boolean;
  }

  export class MainCtrl {
    /* @ngInject */
    constructor (private $scope: IMainScope, 
                 private $window: ng.IWindowService, 
                 private $rootScope: ng.IRootScopeService, 
                 private $auth) {

      $scope.isAuthenticated = () => {
        return $auth.isAuthenticated();
      };

      var awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'jQuery',
        'url': 'http://jquery.com/',
        'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
        'logo': 'jquery.jpg'
      },
      {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      },
      {
        'title': 'Sass (Ruby)',
        'url': 'http://sass-lang.com/',
        'description': 'Original Syntactically Awesome StyleSheets implemented in Ruby',
        'logo': 'ruby-sass.png'
      },
      {
        'title': 'TypeScript',
        'url': 'http://www.typescriptlang.org/',
        'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
        'logo': 'typescript.png'
      }
    ];

      $scope.awesomeThings = new Array<Thing>();
      $scope['test'] = {title: 'asdf', email: 'abc@qwer'};
      awesomeThings.forEach(function(awesomeThing) {
        $scope.awesomeThings.push(new Thing(
          awesomeThing.title,
          awesomeThing.url,
          awesomeThing.description,
          awesomeThing.logo
        ));
      });
    }
  }

}
