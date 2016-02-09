var Mongoose = require('mongoose'),
    schema = Mongoose.Schema,
    // bcrypt = require('bcrypt-nodejs'),
    objectId = Mongoose.Schema.Types.ObjectId;
    // DirectorSchema = ('./DirectorSchema');

var Account = new schema({
    userId: {type: objectId, ref: 'User'},
    companyName: {type: String, required: true},
    director: {type: String, required: true},
    companyAddress: {type: String, required: true},    
})

module.exports = Mongoose.model('Account', Account)