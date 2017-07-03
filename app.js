const http = require('http');

function main() {
  const server = http.createServer((request, response) => {
    const body = Object.keys(request.headers).map(key => `${key}: ${request.headers[key]}`).join('\n');
    response.writeHead(200, {
      'content-type': 'text/plain',
    });
    response.end(body);
  });
  server.listen(8080);
}

main();
