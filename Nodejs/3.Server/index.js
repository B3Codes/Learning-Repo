const http = require('http');  // importing built-in module to create a server
const fs = require('fs');   

// Creating web server
const server =  http.createServer((req, res) => {  // request handler function -> to process incoming requests
  const log = `${Date.now()}: ${req.url} new request recieved!\n`;
  // console.log(`${Date.now()}: ${req.url} new request recieved!`);
  // res.end("Hello from server!");

fs.appendFile("log.txt", log, (error, data) => {
  // Handling Routes
  if(req.url === '/'){
    res.end('Home Page');
  } else if(req.url === '/about') {
    res.end("About Page")
  } else if(req.url === '/contact'){
    res.end("Contact Page");
  } else {
    res.end("404: Page not found!");
  }
})

  
});

  // we need a port umber to run this server
  //  we will listen our server on this port number for incoming call/request

  server.listen(8000, () => {  // callback function is optional
    console.log("server started")
  });

