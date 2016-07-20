'use strict';

angular.module('crawler').controller('CrawlerController', ['$scope', 'Crawler',
  function ($scope, Crawler) {

  	$scope.success = true;
    $scope.crawledLinks = {};

  	$scope.triggerCrawledData = function () {
      Crawler.save({
        urlSeeds: [$scope.urlSeeds]
      });
    };

    $scope.getCrawledData = function () {
      
      Crawler.query(function (res) {
        $scope.success = true;
        $scope.crawledLinks = res;
      });
    };

  }
  ]);
