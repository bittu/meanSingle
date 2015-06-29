var User = require('../models/user');
var secret = require('../../config/secret');

exports.login = function(req, res) {
    var username = req.body.email || '';
	var password = req.body.password || '';
	
	if (username == '' || password == '') { 
		return res.status(401).send('Enter username and password'); 
	}
    
    User.findOne({'local.email': username}, function(err, user) {
        if(err) {
            console.log(err);
			return res.status(401).send('Wrong user or password');
        }
        
        if(!user) {
            return res.status(401).send('Wrong user or password');
        }
        
        if(user.validPassword(password)) {
            var token = jwt.sign({id: user._id}, secret.secretToken, { expiresInMinutes: 60*60 });
			
			return res.json({token:token});
        } else {
            console.log("Attempt failed to login with " + user.local.email);
            return res.status(401).send('Wrong user or password');
        }
    });
};

exports.logout = function(req, res) {
    if(req.user) {
		delete req.user;	
		return res.send(200);
	}
	else {
		return res.send(401);
	}
};

exports.register = function(req, res) {
	var username = req.body.email || '';
	var password = req.body.password || '';

	if (username == '' || password == '') {
		return res.send(400);
	}

	var user = new User();
	user.local.email = username;
	user.local.password = password;

	user.save(function(err) {
		if (err) {
			console.log(err);
			return res.send(500);
		}	
		
		return res.send(200);
	});
};