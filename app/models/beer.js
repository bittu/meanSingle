// app/models/beer.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Beer', {
    name : String,
    type: String,
    quantity: {type: Number, default: 0}
});