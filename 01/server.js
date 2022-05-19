const http = require('http');

let requestsCount = 0;

const server = http.createServer((req, res) => {
  requestsCount++;

  switch(req.url) {
    case '/students':
      res.write('STUDENTS');
      break;
    case '/courses':
      res.write('FRONT + BACK')
      break;
    default:
      res.write('NOT FOUND')
  }
  res.end();
})

server.listen(3003);