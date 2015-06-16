// public/js/services/NerdService.js
angular.module('BeersService', []).factory('Beer', ['$http', function($http) {

    return {
        // call to get all nerds
        getAll : function() {
            console.log("gettingbeers");
            return $http.get('/api/beers');
        },
        
        getOne: function(beerId) {
            console.log("gettingbeers");
            return $http.get('/api/beers/' + beerId);
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        add : function(beer) {
            return $http.post('/api/beers', beer);
        },

        // call to DELETE a nerd
        delete : function(beerId) {
            return $http.delete('/api/beers/' + beerId);
        }
    }       

}]);