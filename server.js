const express = require('express');


let app = express();

app.get('/' , function(req,res){
	res.end("Hello world")
})

app.listen(3000);