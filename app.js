var express = require('express');
var routes = require('./routes');
// var app = module.exports = express.createServer();
var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

// var io	= require('socket.io').listen(app, { log: false });
// DataSift = require('datasift');
// ds = require('./ds_streams.js');

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

// // Routes
require('./routes')(app);

// app.listen(8080);
// console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


