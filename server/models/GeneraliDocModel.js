var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    objectId = Mongoose.Schema.Types.ObjectId;

var GeneraliDoc = new Schema({
    name: { type: String, required: true },
    iDoc: { type: String, required: true }
})

module.exports = Mongoose.model('GeneraliDoc', GeneraliDoc)