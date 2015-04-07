var express = require('express');
var app = express();
var fs=require('fs');
app.use('/',express.static(__dirname));

app.get('/New_Game',function(request,response){
	fs.readFile(__dirname+'/game.json', function (err, data) {
		if (err) 
			response.end(err.toString());
		else
			response.end(data.toString());
});

});
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("SuDoKu Server started at port 3000 ");
});