module.exports = {
  sensors: function(cb) {
    process.nextTick(function() {
      cb(null, ['1']);
    });
  },

  temperature: function(id, cb) {
    process.nextTick(function() {
      cb(null, 26.0);
    });
  }
};