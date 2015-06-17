'use strict';

define([
	'./app'
], function(app) {
    'use strict';
    console.log('appRoutes.js 1');
    return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
console.log('appRoutes.js 2');
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

        $locationProvider.html5Mode(true);

    }]);
});