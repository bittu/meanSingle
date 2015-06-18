// public/js/app.js

define([
	'angular',
	'angularRoute',
	'./appRoutes',
    './controllers/MainCtrl',
	'./controllers/BeersCtrl',
    './services/BeersService'
], function(angular) {
    console.log('app.js');
    return angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'BeersCtrl', 'BeersService']);
});