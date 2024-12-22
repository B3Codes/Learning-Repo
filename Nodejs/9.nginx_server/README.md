# Node.js Static File Server

## Description

A lightweight static file server built with Node.js, using core modules (`http`, `fs`, and `path`). This project demonstrates how to serve HTML, CSS, JavaScript, and image files efficiently while handling errors and MIME types. Ideal for learning the basics of HTTP servers and file handling in Node.js.

---

## Features

- Serves static files like HTML, CSS, JavaScript, and images.
- Handles file extensions and MIME types.
- Provides custom error handling for missing or forbidden files.
- Logs incoming requests for debugging purposes.
- Easily extensible to support more file types and features.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/B3Codes/custom-node-server.git
cd custom-node-server
```

### Install Dependencies

No external dependencies are required. This project uses Node.js core modules.

### Add Static Files

Place your static files (e.g., `index.html`, `style.css`, etc.) in the root directory or modify the file path logic to serve files from a `public` directory.

### Run the Server

```bash
node server.js
```

### Access the Server

Open your browser and navigate to:

```
http://localhost:3000
```

---

## Code Structure

- `server.js`: Core server file that handles requests and serves files.

---

## Key Highlights of the Code

1. **HTTP Server Creation**:
   - The `http.createServer` method is used to create the server.
2. **File Path Handling**:
   - `path.join` ensures proper resolution of file paths to prevent directory traversal.
3. **Error Handling**:
   - Custom handling for `404: File Not Found` and `500: Internal Server Error`.
4. **MIME Types**:
   - Maps file extensions to appropriate content types to ensure correct rendering in the browser.
5. **Request Logging**:
   - Logs each incoming request for debugging and analytics.

---

## Example Enhancements

- **Dynamic Directory Support**: Serve files from a `public` folder.
- **Custom Error Pages**: Design and serve HTML pages for `404` and `500` errors.
- **Caching**: Add HTTP headers for caching to improve performance.
- **HTTPS Support**: Use the `https` module for secure communication.

---

## License

This project is licensed under the MIT License.

---

## Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).

Happy coding!
