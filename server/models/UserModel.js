var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    bcrypt = require('bcrypt-nodejs'),
    objectId = Mongoose.Schema.Types.ObjectId;
        

var User = new Schema({
    userName: { type: string, required: true, unique: true },
    password: { type: string, required: true },
    accounts: [{type: objectId, ref: 'Account'}],  //array of Account models 
})

//security 

