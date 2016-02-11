var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccountAdminSchema = new Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    email: {type: String, required: true},
});


module.exports = AccountAdminSchema; 