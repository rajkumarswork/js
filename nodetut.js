var http = require('http')

var callback = function( p ){
  p.setEncoding('utf8');
  var data = '';
  p.on('data', function( chunk ){
    data = data + chunk 
  });
  p.on('end', function( c ){
    console.log('BODY: ' + data )
    console.log('END: ' + c )
  });
  console.log("Status Code: " + p.statusCode );
}

var url = process.argv[2]
http.get( url, callback )

