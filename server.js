global.__root = __dirname + '/';
var express = require('express'),
	router = require('./router')
	app = express();

app.use("/", express.static(__dirname + "/view"));
router(app);
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
	console.log('Listening at ' + app.get('port'));
});
