(function () {
  'use strict';

  angular
    .module('photos')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Photos',
      state: 'photos',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'photos', {
      title: 'List Photos',
      state: 'photos.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'photos', {
      title: 'Create Photo',
      state: 'photos.create',
      roles: ['user']
    });
  }
})();
