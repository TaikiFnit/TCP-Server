var net = require('net');

var server = net.createServer(function(c) {

  console.log('server connected');

  c.write('test');
  c.pipe(c);

  c.on('end', function() {
    console.log('server disconnected');
  });
});

server.listen(80, function() { //'listening' listener
  console.log('server bound');
});
