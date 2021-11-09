var express = require('express');
var app = express();
app.get('/', (req,res) =>{
    res.send("welcome to express.js demo");
}
)

var server = app.listen(3000,() =>{
    var host = server.address().host
    var port= server.address().port
    console.log("this app listening at http://%s:$s",host,port);
}
)