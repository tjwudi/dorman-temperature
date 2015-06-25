'use strict';

let ds18b20;

console.log('[Temperature] process env: ' + process.env['NODE_ENV']);
if (process.env['NODE_ENV'] === 'production') {
  ds18b20 = require('ds18b20');
}
else {
  // fake one
  ds18b20 = {
    sensors: function(callback) {
      callback(null, ['1']);
    },
    temperature: function(id, callback) {
      callback(null, 26.0);      
    }
  };
}

module.exports = ds18b20;
