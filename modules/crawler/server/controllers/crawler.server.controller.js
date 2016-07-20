'use strict';

exports.dispatch = function (req, res) {

    var urlSeeds = req.body.urlSeeds;
    // console.log('urlSeeds is:'+urlSeeds);
    var crawlerService = require('../service/crawler.server.service');
    crawlerService.startCrawling(urlSeeds);


};

exports.retrieve = function (req, res) {
    var dao = require('../dao/crawler.server.dao');
    var listResult = dao.list();
    listResult.exec(function (err, results) {
    	if(err) { 
			console.log(err);
		}
		else {
			res.json(results);
		}
    });

 //    console.log(dao.list());
	// res.json(dao.list());
};
