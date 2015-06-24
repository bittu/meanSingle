'use strict';

define([
	'angular',
	'angularRoute'
], function(angular) {
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

            // home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })

            // nerds page that will use the NerdController
            .when('/beers', {
                templateUrl: 'views/beers.html',
                controller: 'BeersController'
            })

            .when('/beers/add', {
                templateUrl: 'views/addBeer.html',
                controller: 'BeerController',
                resolve: {
                    action: function(){return 'add';}
                }
            })

            .when('/beers/:beerId', {
                templateUrl: 'views/showBeer.html',
                controller: 'ShowBeerController'
            })

            .when('/beers/:beerId/edit', {
                templateUrl: 'views/addBeer.html',
                controller: 'BeerController',
                resolve: {
                    action: function(){return 'edit';}
                }
            });

        $locationProvider.html5Mode(false);
        //$locationProvider.hashPrefix();

    }]);
});