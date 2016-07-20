'use strict';

//Setting up route
angular.module('crawler').config(['$stateProvider',
  function($stateProvider) {
    // Crawler state routing
    $stateProvider
      .state('crawler', {
        url: '/crawler',
        templateUrl: 'modules/crawler/client/views/crawler.client.view.html'
      });
  }
]);
