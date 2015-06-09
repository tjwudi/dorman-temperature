var soap = require('soap');
var url = 'http://192.168.0.102:10001/?wsdl';
var args = { in: 'placeholder' };

soap.createClient(url, function(err, client) {
  client.GetTemperature(function(err, result) {
    console.log('Temperature: ' + result.temperature);
  });
});