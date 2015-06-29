define([
	'angular'
], function(angular) {
    angular.module('AuthenticationService', []).factory('AuthenticationService', function($http) {

        var auth = {
            isAuthenticated: false,
            isAdmin: false
        }
        
        return {
            // call to get all nerds
            auth : auth
        }
    });
});