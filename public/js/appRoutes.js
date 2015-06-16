// public/js/appRoutes.js
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
            controller: 'AddBeerController'
        })
        
        .when('/beers/:beerId', {
            templateUrl: 'views/addBeer.html',
            controller: 'AddBeerController'
        });

    $locationProvider.html5Mode(true);

}]);