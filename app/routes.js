// app/routes.js

var expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt

var secret = require('../config/secret');

var beerController = require('./controllers/beer');
var userController = require('./controllers/user');

module.exports = function(express, app) {

    // Create our Express router
    var router = express.Router();
    
    
    app.use(function(err, req, res, next){
      if (err.constructor.name === 'UnauthorizedError') {
        res.status(401).send('Unauthorized');
      }
    });
    
        
    //app.post('/login', userController.login);
    router.route('/login').post(userController.login);
    
    
    // process the signup form
    //app.post('/signup', userController.register);
    router.route('/signup').post(userController.register);
    
   
    // =====================================
    // LOGOUT ==============================
    // =====================================
    //app.get('/logout', userController.logout);
    router.route('/logout').post(userController.logout);

    // Create endpoint handlers for /beers
    router.route('/beers')
      .post(beerController.postBeers)
      .get(beerController.getBeers);

    // Create endpoint handlers for /beers/:beer_id
    router.route('/beers/:beer_id')
      .get(beerController.getBeer)
      .put(beerController.putBeer)
      .delete(beerController.deleteBeer);
    
    
    app.use('/api', expressJwt({secret: secret.secretToken}));
    
    // Register all our routes with /api
    app.use('/api', router);
    
};
