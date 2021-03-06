require.config({
	paths: {
        jquery: 'libs/jquery/dist/jquery.min',
		angular: 'libs/angular/angular.min',
		angularRoute: 'libs/angular-route/angular-route.min',
		//text: 'libs/requirejs-text/text',
        bootstrap: 'libs/bootstrap/dist/js/bootstrap.min'
	},
	shim: {
		'angular': {'deps': ['jquery'], 'exports' : 'angular'},
		'angularRoute': ['angular'],
        'bootstrap': ['jquery']
	}
});

require([
	'angular',
    'angularRoute',
    'js/app'
	], function(angular, ngRoute, app) {
        try{
            angular.element(document).ready(function() {
                // bootstrap the app manually
                angular.bootstrap(document, ['sampleApp']);
		    });
        }catch(e){console.log(e)}
	}
);