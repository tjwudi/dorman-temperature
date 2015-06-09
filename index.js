var soap = require('soap'),
  http = require('http'),
  service = require('./lib/service');

var wsdl = require('fs').readFileSync('./service.wsdl', 'utf8'),
    server = http.createServer(function(request,response) {
        response.end("404: Not Found: "+request.url)
    });
server.listen(10001);
soap.listen(server, '/', service, wsdl);
