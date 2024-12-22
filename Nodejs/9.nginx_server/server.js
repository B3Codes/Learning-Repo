// import http
const http = require('http');
// impport fs
const fs = require('fs');
const path = require('path');
const { error } = require('console');

const port = 3000;

//  create server
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url ==='/' ? "index.html" : req.url);
  
  const extName = String(path.extname(filePath)).toLowerCase();

  const mineTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'text/png',
  }

  const contentType = mineTypes[extName] || 'application/octet-stream';

  fs.readFile(filePath, (error,content) => {
    if(error) {
      if(error.code === "ENOENT"){
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("404: File not found!");
      }

    } else {
      res.writeHead(200, {"Content-Type": contentType});
      res.end(content, "utf-8");
    }
  })
});

//  listen to sever
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})