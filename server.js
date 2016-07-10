global.__root = __dirname + '/';

var http = require('http');
var express = require('express');
var router = require('./router');
var app = express();

app.use("/", express.static(__dirname + "/view"));
router(app);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

http.createServer(app).listen(app.get('port'), app.get('ip'), function() {
    console.log('Listening at ' + app.get('port'));
});
