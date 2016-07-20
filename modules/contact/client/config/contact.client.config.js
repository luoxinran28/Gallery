(function() {
	'use strict';


	angular
	.module('contact')
	.run(menuConfig);

	menuConfig.$inject = ['Menus'];

	function menuConfig(Menus) {
		Menus.addMenuItem('topbar', {
			title: 'Contact Us',
			state: 'contact',
			position: 3,
			roles: ['*']
		});
	}
})();