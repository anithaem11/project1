'use strict';

/**
 * @ngdoc overview
 * @name project1App
 * @description
 * # project1App
 *
 * Main module of the application.
 */
angular
  .module('project1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($routeProvider,$urlRouterProvider,$stateProvider) {

    // $urlRouterProvider.otherwise('/main');
    // $urlRouterProvider.when('/main' + 'main');

    // $stateProvider
    //   .state('main', {
    //     url: '/main',
    //     templateUrl: 'views/main.html',
    //     controller:'MainCtrl',
    //   });

    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        // controller:'MainCtrl',
      });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
     
    .otherwise({
      redirectTo: '/'
    });
    
  });
