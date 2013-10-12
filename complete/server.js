var http = require('http'),
    path = require('path'),
    url = require('url');
    fs = require('fs');

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;
  switch(request.method) {
    case 'POST':
      break;
    case 'GET':
      if(path === '/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fs.readFileSync(__dirname+'/step1.html'));
      }
      break;
    default:
      response.end(404);
  }
}).listen(8080, '127.0.0.1');

console.log('Listening...');