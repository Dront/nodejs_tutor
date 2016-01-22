var express = require('express');

var app = express();

port = '5433'

app.get('/headers', function(req,res){
    res.set('Content-Type','text/plain');
    var s = '';
    for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s);
});

app.listen(port, '0.0.0.0', function(){
  console.log( 'Express started on http://localhost:' +
    port + '; press Ctrl-C to terminate.' );
});
