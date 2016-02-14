var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    objectId = Mongoose.Schema.Types.ObjectId;

var UpdatedForm = new Schema({
    accountId: {type:objectId, ref: 'Account', required: true},
    form: {type: String, required: true}
})

module.exports = Mongoose.model('UpdatedForm', UpdatedForm)
