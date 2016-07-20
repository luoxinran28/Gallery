'use strict';

angular.module('crawler').factory('Crawler', 
  [
    '$resource',
    function($resource) {
      return $resource('crawler', {}, {
          query: { method: 'GET', isArray: true },
          save: { method: 'POST' }
        }
      );
    }
  ]
);
