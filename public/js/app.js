// public/js/app.js

define([
	'angular',
    'angularRoute',
    './controllers/index',
    './services/index'
], function(ng) {
    'use strict';
    console.log('app.js');
    return ng.module('app', ['app.controllers', 'app.services']);
});