var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs'),
    objectId = mongoose.Schema.Types.ObjectId;
        

var User = Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // accounts: [{type: objectId, ref: 'Account'}],  //array of Account models 
})

module.exports = mongoose.model('User', User)
//security 

