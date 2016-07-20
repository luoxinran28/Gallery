'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'Search',
  function ($scope, Authentication, Search) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

  	$scope.success = false;
    $scope.crawledLinks = {};
  
    $scope.getCrawledData = function () {
      Search.save(function (res) {
        $scope.success = true;
        $scope.crawledLinks = res;
      });
    };
  }
]);
