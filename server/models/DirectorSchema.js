var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs'),
    objectId = mongoose.Schema.Types.ObjectId;

var Director = new Schema({
    name: {type: String, required: true, unique: true},
    
}),