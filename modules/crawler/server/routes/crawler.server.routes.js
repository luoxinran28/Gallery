'use strict';

module.exports = function(app) {
	var crawler = require('../controllers/crawler.server.controller');

	app.route('/crawler')
		.get(crawler.retrieve)
		.post(crawler.dispatch);
};
