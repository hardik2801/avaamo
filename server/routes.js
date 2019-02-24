var path = require('path');

var express = require('express');

var config = appRequire('config');

module.exports = function (app) {

	app.use('/avaamo', express.static(path.join(config.root, 'client', 'dist')));
	
	app.use('/api', appRequire('api.ttt'));

	app.use('*', express.static(path.join(config.root, 'client', 'dist')));
	
};