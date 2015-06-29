// public/js/controllers/MainCtrl.js

define([
	'angular',
	'angularRoute',
    '../services/UserService',
    '../services/AuthenticationService'
], function(angular) {
    angular.module('AdminUserCtrl ', []).controller('AdminUserCtrl ', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService' ,function($scope, $location, $window, UserService, AuthenticationService) {
        
        //Admin User Controller (signIn, logOut)
        $scope.signIn = function () {
            var email = $scope.formData.email,
                password = $scope.formData.password;
            
            if (email !== null && password !== null) {

                UserService.signIn(username, password).success(function(data) {
                    AuthenticationService.isAuthenticated = true;
                    $window.sessionStorage.token = data.token;
                    $location.path("/admin");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }

        $scope.logOut = function logOut() {
            if (AuthenticationService.isAuthenticated) {
                
                UserService.logOut().success(function(data) {
                    AuthenticationService.isAuthenticated = false;
                    delete $window.sessionStorage.token;
                    $location.path("/");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
            else {
                $location.path("/admin/login");
            }
        }

        $scope.register = function register() {
            var email = $scope.formData.email,
                password = $scope.formData.password,
                firstName = $scope.formData.firstName,
                lastName = $scope.formData.lastName;
            
            if (AuthenticationService.isAuthenticated) {
                $location.path("/");
            }
            else {
                UserService.register(username, password, firstName, lastName).success(function(data) {
                    $location.path("/admin/login");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }
        
        
    }]);
});