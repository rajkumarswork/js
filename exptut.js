var path = require('path')
var bodyparser = require('body-parser')
var express = require('express')

var app = express();
app.use( bodyparser.urlencoded({extended: false}));

// Get processing
app.get('/app', function( q, p ){
 var o =  q.query;
 p.send( o )
});


// Form processing
app.get('/form', function( q, p ){
  var html =  '<form action="/" method="post">' + 
              'Name: <input name="user" /> <br>' +
              '<button type="submit">Submit</button>' +
              '</form>';
  p.send( html );
});
app.post('/', function(q, p){
  var u = q.body.user.split('').reverse().join('');
  var html =  'Hi: ' + u + '<br>' +
              '<a href="/form">Try again</a>';
  p.send( html )
});

app.use( express.static('public'));


app.listen( 3000 ); 
