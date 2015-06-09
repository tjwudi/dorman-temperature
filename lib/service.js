var ds18b20,
  validId;

if (process.env['NODE_ENV'] === 'development') {
  ds18b20 = require('./ds18b20-stub');
}
else {
  // testing & production
  ds18b20 = require('ds18b20');
}

ds18b20.sensors(function(err, ids) {
  validId = ids[0];
});

module.exports = {
  Temperature: {
    TemperatureSOAP: {
      GetTemperature: function(args, callback) {
        if (!validId) callback(Number.MIN_VALUE);
        ds18b20.temperature(validId, function(err, result) {
          callback({temperature: result});
        });  
      }
    }
  }
};