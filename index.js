var fs = require('fs');
var guid = require('guid');

module.exports = function(dirname){
  if(dirname){
    fs.mkdir(dirname, function(err){});
    return {
      read: function(id, cb){
        fs.readFile([dirname, id].join('/'), function(err, data){
          cb(err, JSON.parse(data));
        });
      },

      save: function(obj, cb){
        var id = guid.raw();
        fs.writeFile([dirname, id].join('/'), JSON.stringify(obj), function(err){
          cb(err, id);
        });
      }
    };
  } else {
    console.log('You must define a dirname for fileobj.');
    return null;
  }
}
