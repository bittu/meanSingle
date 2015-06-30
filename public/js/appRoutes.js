'use strict';

define([
	'angular',
	'angularRoute',
    './services/AuthenticationService',
    './services/TokenService',
    './controllers/AdminUserCtrl'
], function(angular) {
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', 'AuthenticationService', 'TokenInterceptor', '$rootScope', '$location', '$window', 'AdminUserCtrl', function($routeProvider, $locationProvider, AuthenticationService, TokenInterceptor, $rootScope, $location, $window, AdminUserCtrl) {

        $routeProvider

            // home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController',
                access: { requiredAuthentication: true }
            })

            // nerds page that will use the NerdController
            .when('/beers', {
                templateUrl: 'views/beers.html',
                controller: 'BeersController',
                access: { requiredAuthentication: true }
            })

            .when('/beers/add', {
                templateUrl: 'views/addBeer.html',
                controller: 'BeerController',
                resolve: {
                    action: function(){return 'add';}
                },
                access: { requiredAuthentication: true }
            })

            .when('/beers/:beerId', {
                templateUrl: 'views/showBeer.html',
                controller: 'ShowBeerController',
                access: { requiredAuthentication: true }
            })

            .when('/beers/:beerId/edit', {
                templateUrl: 'views/addBeer.html',
                controller: 'BeerController',
                resolve: {
                    action: function(){return 'edit';}
                },
                access: { requiredAuthentication: true }
            }).
        
            when('/register', {
                templateUrl: 'views/register.html',
                controller: 'AdminUserCtrl'
            }).
        
            when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AdminUserCtrl'
            }).
        
            when('/logout', {
                templateUrl: 'partials/admin.logout.html',
                controller: 'AdminUserCtrl',
                access: { requiredAuthentication: true }
            }).
        
            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix();
        
        app.config(function ($httpProvider) {
            $httpProvider.interceptors.push('TokenInterceptor');
        });
        
        app.run(function($rootScope, $location, $window, AuthenticationService) {
            $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
                //redirect only if both isAuthenticated is false and no token is set
                if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication 
                    && !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {

                    $location.path("/admin/login");
                }
            });
        });

    }]);
});