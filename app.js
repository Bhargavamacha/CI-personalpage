var express = require('express');
var app = express();
const { exec } = require("child_process");


app.all('/', function (req, res) {
  	console.log(req);
	res.send('Got it!');
exec(" ./build", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
});
app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
