var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    objectId = Mongoose.Schema.Types.ObjectId;

var UpdatediDoc = new Schema({
    accountId: { type: objectId, ref: 'Account', required: true },
    name: { type: String, required: true },
    updatediDoc: { type: String, required: true }
})

module.exports = Mongoose.model('UpdatediDoc', UpdatediDoc)
