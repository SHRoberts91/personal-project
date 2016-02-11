var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    // bcrypt = require('bcrypt-nodejs'),
    objectId = Mongoose.Schema.Types.ObjectId,
    DirectorSchema = ('./DirectorSchema'),
    AccountAdminSchema = ('./DirectorSchema');    

var Account = new Schema({
    userId: {type: objectId, ref: 'User'},
    companyName: {type: String, required: true},
    companyType: {type: String, required: true},
    stateOfFOrmation: {type: String, required: true},
    addressLineOne: {type: String},
    addressLineTwo: {type: String},
    country: {type: String, required: true},
    city: {type: String},
    state: {type: String, required: true},
    zipCode: {type: String},
    accountAdmin: AccountAdminSchema,
    directors: [{DirectorSchema}]
    
        
})

module.exports = Mongoose.model('Account', Account)