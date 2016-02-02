var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    bcrypt = require('bcrypt-nodejs'),
    objectId = Mongoose.Schema.Types.ObjectId,
    DirectorSchema = ('./DirectorSchema');

var Account = new Schema({
    companyName: {type: string, required: true, unique: true},
    directors: [DirectorSchema],
    companyAddress: {type: string, required: true},    
})