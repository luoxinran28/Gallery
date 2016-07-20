'use strict';


angular.module('contact').controller('ContactController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$scope.sendEmail = function() {

		var contactInfo = {
			fullname: $scope.fullname,
			email: $scope.email,
			message: $scope.message
		};

		$http.post('/contact', contactInfo).then(
			function (res) {
				console.log(res.status);
				$location.url('/email-sent');
		}, 	function (res) {
				console.log(res.status);
				$location.url('/email-reject');
		});


	};
}]);