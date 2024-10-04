// Import the fs module
const fs = require('fs');

// Define the content to be written to the file
const content = 'Hello, this is a text file created using fs.writeFile() in Node.js!';

// Define the path for the text file
const filePath = 'example.txt';

// Use fs.writeFile() to write the content to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log(`File "${filePath}" was successfully written.`);
});
