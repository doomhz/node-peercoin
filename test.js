
var peercoin = require('./lib/peercoin');
var client = new peercoin.Client('localhost', 9902, 'doomhz', 'test');

function doCmd(cmd) {
  client[cmd](function(err, data) {
    console.log(cmd);
    console.log(data);
    console.log("err: ", err);
    console.log('');
  });
}

doCmd('getWork');
