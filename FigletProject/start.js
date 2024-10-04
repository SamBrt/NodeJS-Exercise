// Import the figlet package
const figlet = require('figlet');

// Use figlet to create text-based art
figlet('Hello, World!', (err, data) => {
  if (err) {
    console.error('Something went wrong...');
    console.error(err);
    return;
  }
  console.log(data);
});
