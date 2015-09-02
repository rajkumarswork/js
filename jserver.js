var http  = require('http')
var url   = require('url')

var respa = JSON.stringify( {'a':'foo', 'b':'bar'}  )
var respb = JSON.stringify( {1:2, 3:4 }  )
var respd = JSON.stringify( {'default':200, 'ok':100 }  )

var server = http.createServer( function( q, r ){
  var params = url.parse( q.url, true )
  console.log( params )
  var path = params['pathname']
  var query = params['query']
  console.log( query )
  r.writeHead( 200, { 'Content-Type':'application/json' })
  switch (path) { 
    case '/foo' :
      r.end( respa, 'utf8' )
      break;
    case '/bar' :
      r.end( respb, 'utf8' )
      break;
    default:
      r.end( respd, 'utf8' )
  }

})

server.listen( 3000 )
