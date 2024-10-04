// Import the http module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Define the JSON response body
  const responseBody = JSON.stringify({ location: "Mars" });
  
  // Set the response header: Content-Type: application/json
  res.setHeader('Content-Type', 'application/json');
  
  // Set the response header: Content-Length
  res.setHeader('Content-Length', Buffer.byteLength(responseBody));
  
  // Send the JSON response body
  res.end(responseBody);
});

// Make the server listen on port 3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
