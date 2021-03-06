(function () {
  'use strict';

  require.config({
    paths: {
      angular: '../bower_components/angular/angular.min',
      chart: '../bower_components/Chart.js/Chart',
      'angular-chart': '../angular-chart'
    },
    shim: {
      angular: {
        exports: 'angular'
      }
    }
  });

  define(['angular', 'angular-chart'], function (angular/*, angularChart*/) {
    var app = angular.module('examples', ['chart.js']);
    app.controller('RequireCtrl', ['$scope', function ($scope) {
      $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
    }]);
  });

})();
