'use strict';

module.exports = function(app) {
	var contact = require('../controllers/contact.server.controller');

	app.route('/contact')
		.post(contact.sendMail);
};
