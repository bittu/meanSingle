// app/routes.js
var beerController = require('./controllers/beer');

module.exports = function(express, app) {

    // Create our Express router
    var router = express.Router();

    // Create endpoint handlers for /beers
    router.route('/beers')
      .post(beerController.postBeers)
      .get(beerController.getBeers);

    // Create endpoint handlers for /beers/:beer_id
    router.route('/beers/:beer_id')
      .get(beerController.getBeer)
      .put(beerController.putBeer)
      .delete(beerController.deleteBeer);
    
    app.use("/", function(req, res, next) {
            console.log(req.url);
            console.log(req.body);
            console.log(req.params);
            next();
        });

    // Register all our routes with /api
    app.use('/api', router);

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
