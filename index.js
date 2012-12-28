var express = require('express'),
	sio = require('socket.io'),
	ejs = require('ejs'),
	fs = require('fs');

var app = express();
var pub = __dirname + '/public';

app.configure(function() {
	app.use(express.errorHandler({ dump: true, stack: true }));
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.session({ secret: 'mruff' }));
	app.set('views', pub);
	app.set('view engine', 'ejs');
	app.set("view options", {layout: false});

	app.use(app.router);
	app.use(express.static(pub));
});

/*
	Routing
*/
app.get('/', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});


app.post('/api/', function(req, res){
	var data = req.body.data;
	res.send("foo");
});

app.get('/templates', function(req,res){
	res.sendfile(__dirname + '/public/templates/templates.json');
});

app.listen(6969);
