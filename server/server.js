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
    Meeting = require('./models/MeetingModel');
//controllers    
var userCtrl = require('./controllers/userCtrl'),  
    accountCtrl = require('./controllers/accountCtrl'),
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

var mongoUri = 'mongodb://localhost:27017/attourneyHelper'
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

app.post('/account', accountCtrl.create);
app.get('/account', accountCtrl.read);
app.put('/account/:id', accountCtrl.update);
app.delete('/account/:id', accountCtrl.delete);

app.post('/meeting', meetingCtrl.create);
app.get('/meeting', meetingCtrl.read);
app.put('/meeting/:id', meetingCtrl.update);
app.delete('/meeting/:id', meetingCtrl.delete);


var portNum = 8887;
app.listen(portNum, function(){
    console.log('listening on', portNum);
})