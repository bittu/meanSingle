define([
	'angular'
], function(angular) {
    angular.module('UserService', []).factory('UserService', ['$http', function($http) {

        return {
            login: function(email, password) {
                return $http.post('/api/login', {email: email, password: password});
            },

            logout: function() {
                return $http.get('/api/logout');
            },

            register: function(email, password, firstName, lastName) {
                return $http.post('/api/signup', {email: email, password: password, firstName: firstName, lastName: lastName});
            }
        };
    }]);
});