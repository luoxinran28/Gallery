'use strict';

//Setting up route
angular.module('contact').config(['$stateProvider',
  function($stateProvider) {
    // Crawler state routing
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'modules/contact/client/views/contact.client.view.html'
      })
      .state('email-sent', {
      	url: '/email-sent',
      	templateUrl: 'modules/contact/client/views/email-sent.client.view.html'
      })
      .state('email-reject', {
      	url: '/email-reject',
      	templateUrl: 'modules/contact/client/views/email-reject.client.view.html'
      });
  }
]);
