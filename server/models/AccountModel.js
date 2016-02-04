var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    bcrypt = require('bcrypt-nodejs'),
    objectId = Mongoose.Schema.Types.ObjectId,
    DirectorSchema = ('./DirectorSchema');

var Account = new Schema({
    companyName: {type: String, required: true, unique: true},
    directors: [DirectorSchema],
    companyAddress: {type: String, required: true},    
})