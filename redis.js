var redis = require('redis');

var host = '54.92.205.138';
var port = 6379;

var client = redis.createClient( port, host );

client.on( 'connect', function() {
  console.log('connected');
});

client.hgetall('hpmap', function( err, obj){
  console.log( obj );
});
