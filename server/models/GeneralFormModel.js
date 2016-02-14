var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    objectId = Mongoose.Schema.Types.ObjectId;

var GeneralForm = new Schema({
    form: {type: String, required: true}    
})

module.exports = Mongoose.model('GeneralForm', GeneralForm)