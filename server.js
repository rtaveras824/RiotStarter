var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('./riotstarter/build'));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/riotstarter/build/index.html');
});

app.listen(PORT, function() {
	console.log('Listening on port: ', PORT);
});