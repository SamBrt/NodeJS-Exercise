// Import the http module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code to 200 (OK)
  res.statusCode = 200;
  
  // Set the response header: Content-Type: text/html
  res.setHeader('Content-Type', 'text/html');
  
  // Send the HTML response body with a custom message
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Custom Server</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is a custom message from my Node.js server.</p>
    </body>
    </html>
  `);
});

// Make the server listen on port 3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
