var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    // bcrypt = require('bcrypt-nodejs'),
    objectId = schema.Types.ObjectId;
        

var User = schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accounts: [{type: objectId, ref: 'Account'}],  //array of Account models })
});
module.exports = mongoose.model('User', User)
//security 

