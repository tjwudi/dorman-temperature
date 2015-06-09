var soap = require('soap'),
  spawn = require('child_process').spawn;

require('should');

describe('temperature service', function() {
  it('should be able to get temperature', function(done) {
    var url = 'http://localhost:10001/?wsdl';
    var args = { in: 'placeholder' };
    soap.createClient(url, function(err, client) {
      client.GetTemperature(function(err, result) {
        result.should.have.property('temperature');
        (+result.temperature).should.be.a.Number;
        done();
      });
    });
  });
});