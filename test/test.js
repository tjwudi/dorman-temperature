var soap = require('soap');

require('should');

describe('temperature service', function() {
  it('should be able to get temperature', function(done) {
    var url = 'http://localhost:10001/?wsdl';
    var args = { in: 'placeholder' };
    var options = { endpoint: 'http://localhost:10001' };
    soap.createClient(url, options, function(err, client) {
      client.GetTemperature(function(err, result) {
        result.should.have.property('temperature');
        (+result.temperature).should.be.a.Number;
        done();
      });
    });
  });
});