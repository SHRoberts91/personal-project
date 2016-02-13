var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    // bcrypt = require('bcrypt-nodejs'),
    objectId = Mongoose.Schema.Types.ObjectId,
    DirectorSchema = ('./DirectorSchema');
    // AccountAdminSchema = ('./AccountAdminSchema');    

var Account = new Schema({
    userId: {type: objectId, ref: 'User'},
    companyName: {type: String, required: true},
    companyType: {type: String, required: true},
    stateOfFormation: {type: String, required: true},
    addressLineOne: {type: String},
    addressLineTwo: {type: String},
    country: {type: String, required: true},
    city: {type: String},
    state: {type: String, required: true},
    zipCode: {type: String},
    accountAdminName: {type: String, required: true},
    accountAdminTitle: {type: String, required: true},
    accountAdminEmail: {type: String, required: true},
    directors: [DirectorSchema]
    
        
})

module.exports = Mongoose.model('Account', Account)