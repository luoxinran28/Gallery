(function() {
	'use strict';


	angular
	.module('crawler')
	.run(menuConfig);

	menuConfig.$inject = ['Menus'];

	function menuConfig(Menus) {
		// Menus.addMenuItem('topbar', {
		// 	title: 'Crawler',
		// 	state: 'crawler',
		// 	position: 2,
		// 	roles: ['*']
		// });
	}
})();