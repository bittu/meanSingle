// public/js/controllers/MainCtrl.js

define([
	'angular',
	'angularRoute'
], function(angular) {
    angular.module('MainCtrl', []).controller('MainController', ['$scope',function($scope) {
        $scope.tagline = 'To the moon and back!';   
    }]);
});