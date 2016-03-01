var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    GoogleStrategy = require('passport-google').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy;

//Models
var User = require('./models/UserModel'),
    Account = require('./models/AccountModel'),
    Meeting = require('./models/MeetingModel'),
    DirectorSchema = require('./models/DirectorSchema'),
    AccountAdminSchema = require('./models/AccountAdminSchema');
    
//controllers    
var userCtrl = require('./controllers/userCtrl'),
    accountCtrl = require('./controllers/accountCtrl'),
    iDocCtrl = require('./controllers/iDocCtrl'),
    meetingCtrl = require('./controllers/meetingCtrl');


   
   
//end point protection

// var isAuthenticated = function (req, res, next) {
// 	if (req.isAuthenticated()) {
// 		next();
// 	} else {
// 		return res.status(403).send('Not logged in');
// 	}
// };
   
var app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(bodyParser.urlencoded({extended: false}));

//local-host

// app.use(session({
// 	secret: 'secretsecretsecretsecretsecret',
// 	saveUninitialized: false,
// 	resave: true
// }));
// app.use(passport.initalize());  
// app.use(passport.session());

//for testing front end and back end

app.use(express.static(__dirname + '/../public'));


//connecting to db

var mongoUri = 'mongodb://localhost:27017/iLawyer'
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Mongo connected at', mongoUri);
})

//endpoints

app.post('/register', userCtrl.register);
app.get('/user', userCtrl.read);
app.get('/me', userCtrl.me);
app.get('/user/read/:id', userCtrl.readUser);
app.put('/user/:id', userCtrl.update);

// app.post('/login', function(req, res, next){
//     //login
// })
// app.post('/loginFromLocal')
// app.get('logout', function(req, res, next){
//     //logout
// })
// app.get('/login', userCtrl.read);

app.post('/accounts', accountCtrl.create);
app.get('/accounts', accountCtrl.read);
app.put('/accounts/:id', accountCtrl.update);
app.delete('/accounts/:id', accountCtrl.delete);

app.post('/iDocs/general', iDocCtrl.create)
app.get('/iDocs/general', iDocCtrl.read);
app.put('/iDocs/general/:id', iDocCtrl.update);
app.delete('/iDocs/general/:id', iDocCtrl.delete);
app.post('/iDocs/modified', iDocCtrl.createModified)
app.get('/iDocs/modified', iDocCtrl.readModified);
app.put('/iDocs/modified/:id', iDocCtrl.updateModified);
app.delete('/iDocs/modified/:id', iDocCtrl.deleteModified);


app.post('/meeting', meetingCtrl.create);
app.get('/meeting', meetingCtrl.read);
app.put('/meeting/:id', meetingCtrl.update);
app.delete('/meeting/:id', meetingCtrl.delete);


var portNum = 8891;
app.listen(portNum, function () {
    console.log('listening on', portNum);
})