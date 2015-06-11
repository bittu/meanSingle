// public/js/controllers/BeersCtrl.js
angular.module('BeersCtrl', []).controller('BeersController', function($scope, Beer) {

    console.log(Beer);
    var beers = Beer.get();
    beers.success(function(data) {
                console.log(data);
               $scope.beers = data;
            });
    
});