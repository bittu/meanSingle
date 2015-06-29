// public/js/app.js

define([
	'angular',
	'angularRoute',
	'./appRoutes',
    './controllers/MainCtrl',
	'./controllers/BeersCtrl',
    './controllers/AdminUserCtrl',
    './services/BeersService',
    './services/AuthenticationService',
    './services/TokenService',
    './services/UserService',
], function(angular) {
    return angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'BeersCtrl', 'AdminUserCtrl', 'BeersService', 'AuthenticationService', 'TokenService', 'UserService']);
});