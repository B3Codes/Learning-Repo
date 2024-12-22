// Import the necessary modules
const http = require('http'); // HTTP module to create the server and handle HTTP requests
const fs = require('fs'); // File System module to read files from the file system
const path = require('path'); // Path module to handle and resolve file paths

// Define the port the server will listen on
const port = 3000;

// Create the server
// The callback handles incoming HTTP requests and sends appropriate responses
const server = http.createServer((req, res) => {
  /**
   * Resolve the file path based on the request URL.
   * - If the URL is '/', serve the 'index.html' file.
   * - Otherwise, serve the file corresponding to the requested URL.
   */
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  /**
   * Extract the file extension from the resolved file path.
   * This helps determine the file type for setting the correct MIME type.
   */
  const extName = String(path.extname(filePath)).toLowerCase();

  /**
   * Define the supported MIME types.
   * - Maps file extensions to their respective content types.
   * - Used to inform the browser about the type of content being served.
   */
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
  };

  /**
   * Determine the content type of the file based on its extension.
   * - If the extension is not in the defined MIME types, fall back to 'application/octet-stream'.
   */
  const contentType = mimeTypes[extName] || 'application/octet-stream';

  /**
   * Read the requested file using the File System module.
   * - If the file is found, serve it with a 200 status.
   * - If an error occurs (e.g., file not found), handle the error appropriately.
   */
  fs.readFile(filePath, (error, content) => {
    if (error) {
      /**
       * Handle the 'File Not Found' error.
       * - If the file is not found (ENOENT error), send a 404 response.
       */
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404: File Not Found!</h1>');
      } else {
        /**
         * Handle any other server errors.
         * - Send a 500 response indicating a server-side issue.
         */
        res.writeHead(500);
        res.end('500: Internal Server Error');
      }
    } else {
      /**
       * Serve the requested file with a 200 status.
       * - Send the file content and specify the correct content type.
       */
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
