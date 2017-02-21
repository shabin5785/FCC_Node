const express = require('express');
const isNumber = require('isnumber');
const moment = require('moment');


let app = express();

let obj = {};

let unix = null;
let natural = null;
let mom = null;
app.get('/timestamp/:ts' , function(req,res){
	unix = null;
	natural = null;
	let ts = req.params.ts;

	let isUnix = moment.unix(ts).isValid();
	//convert to natural
	if(isUnix){
		unix = ts;
		mom = moment.unix(ts);
		natural = mom.format("MMMM D, YYYY");
	}
	else{
		let isNatural = moment(ts, "MMMM D, YYYY").isValid();
		if(isNatural){
			natural = ts;
			mom = moment(ts, "MMMM D, YYYY");
			unix = mom.unix();
		}
	}

	obj.unix = unix;
	obj.natural = natural

	res.send(obj);

})

app.listen(process.env.PORT || 3000);