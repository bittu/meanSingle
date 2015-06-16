// public/js/controllers/BeersCtrl.js
angular.module('BeersCtrl', []).controller('BeersController', function($scope, Beer, $location) {

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
    
})

.controller('AddBeerController', function($scope, Beer) {
    $scope.addBeer = function() {
        if (!$.isEmptyObject($scope.formData)) {
            Beer.add($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        alert(data.message);
                    });
            }
    }
    
    $scope.clear = function() {
        $scope.formData = {};
    };
});