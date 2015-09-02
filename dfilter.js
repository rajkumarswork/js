var p = require('path')
var fs = require('fs')

module.exports.dfilter = function( args ){
  var dir = args['dir']
  var ext = args['ext']
  var callback = function (err, list) {
    if( err ) console.log( err );
    else {
      for( var i = 0; i < list.length; i++ ){
        var path = list[i]
        var pext = p.extname( path )
        if( pext == ext ) console.log( list[i] )
      }
    }
  }

  fs.readdir( dir, callback );
}


