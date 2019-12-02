var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
 
var serve = serveStatic('serve', { 'index': ['index.html', 'index.htm'] })
 
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})
 
console.log("TEI Boilerplate Teaching Server")
server.listen(3000)
console.log("Available at http://localhost:3000")
console.log("Use ctrl-z to quit")