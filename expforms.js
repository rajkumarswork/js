var express = require('express')
var path = require('path')
var bodyparser = require('body-parser')

var app = express();
app.use( bodyparser.urlencoded({extended: false}));

// Static pages from directory public served at '/'
app.use('/', express.static('public'));



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


// Get processing
app.get('/app', function( q, p ){
 var o =  q.query;
 p.send( o )
});
app.get('/json', function( q, p ){
 p.send( jdata )
});


var jdata = {
  "records": [
  {
    "Name" : "Alfreds Futterkiste",
    "City" : "Berlin",
    "Country" : "Germany"
  },
  {
    "Name" : "Berglunds snabbköp",
    "City" : "Luleå",
    "Country" : "Sweden"
  },
  {
    "Name" : "Centro comercial Moctezuma",
    "City" : "México D.F.",
    "Country" : "Mexico"
  },
  {
    "Name" : "Wolski Zajazd",
    "City" : "Warszawa",
    "Country" : "Poland"
  }
  ]
};

app.listen( 3000 ); 
