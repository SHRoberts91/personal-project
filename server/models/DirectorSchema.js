var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DirectorSchema = new Schema({
    name: {type: String},
    title: {type: String},
    email: {type: String}
});


module.exports = DirectorSchema; 