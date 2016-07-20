'use strict';

angular.module('core').factory('Search', 
  [
    '$resource',
    function($resource) {
      return $resource('/', {}, {
          query: { method: 'GET', isArray: true },
          save: { method: 'POST', isArray: true }
        }
      );
    }
  ]
);
