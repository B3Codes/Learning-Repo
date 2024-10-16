const http = require('http');
const url  = require('url');


// create the http server
const server = http.createServer((req, res) => {
  // Parse usrl to get pathname
  const parseURL = url.parse(req.url, true);
  console.log(parseURL);
  const path = parseURL.pathname;   

  const query = parseURL.query;

  // Routing logic based on URL path
  switch(path){
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html' });
      res.end('<h1>Home Page</h1>');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/html' });
      res.end('<h1>About Us</h1>');
      break;
    case '/contact':
      res.writeHead(200, {'Content-Type': 'text/html' });
      res.end('<h1>Contact Page</h1>');
      break;
    case '/search':
      const searchTerm = query.q || 'No search term provided';
      const user = query.userName || 'User';
      res.writeHead(200, {'Content-Type': 'text/html' });
      res.end(`<h1>Hi, ${user} Search Results for: ${searchTerm}</h1>`);
      break;
    default:
      // Handle 404 for unrecognized paths
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Page Not Found</h1>');
      break;
  }
});

//  start the server on port 8000
server.listen(8001,() => {
  console.log("Server is running!");
})