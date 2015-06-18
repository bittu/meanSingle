// public/js/controllers/BeersCtrl.js

define([
	'angular',
    'angularRoute'
], function(angular) {
    
    angular.module('BeersCtrl', []).controller('BeersController', ['$scope', 'Beer', '$location', function($scope, Beer, $location) {

        $scope.formData = {};
        var beers = Beer.getAll();
        var modalInstance = {};
        beers.success(function(data) {
                    console.log(data);
                   $scope.beers = data;
                });

        $scope.open = function() {
            $location.path('/beers/add');
        };

        $scope.openSingle = function(beerId) {
            $location.path('/beers/' + beerId);
        };

    }])

    .controller('BeerController', ['$scope', 'Beer', 'action', '$routeParams', function($scope, Beer, action, $routeParams) {

        $scope.formData = {};
        $scope.edit = false;

        if(action === 'edit') {
            Beer.getOne($routeParams.beerId).success(function(data) {
                $scope.formData = data;
                $scope.edit = true;
            });
        }

        $scope.addBeer = function() {
            if (!$.isEmptyObject($scope.formData)) {
                Beer.add($scope.formData)
                        .success(function(data) {
                            $scope.formData = {};
                            alert(data.message);
                        });
                }
        }

        $scope.editBeer = function() {
            if (!$.isEmptyObject($scope.formData)) {
                Beer.edit($scope.formData, $routeParams.beerId)
                        .success(function(data) {
                                    alert(data.message);
                                });
            }
        }

        $scope.clear = function() {
            $scope.formData = {};
        };
    }])

    .controller('ShowBeerController', ['$scope', 'Beer', '$location', '$routeParams',function($scope, Beer, $location, $routeParams) {
        console.log($location);
        console.log($routeParams);

        $scope.beer = {};

        Beer.getOne($routeParams.beerId).success(function(data) {
            $scope.beer = data;
        });

        $scope.edit = function(beerId) {
            $location.path('/beers/' + beerId + '/edit');
        }
    }]);
});