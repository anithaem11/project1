'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('MainCtrl', function ($rootScope,$scope,$state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // $state.go('main');

    $scope.goToDevPage = function () {
    	$state.go('about');
    }

    // $scope.goToDevPage();

  });
