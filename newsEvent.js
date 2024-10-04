const { EventEmitter } = require('node:events');

function createNewsFeed() {
  const emitter = new EventEmitter();

  // Emit a newsEvent every 1 second
  setInterval(() => {
    emitter.emit('newsEvent', 'News: A thing happened in a place.');
  }, 1000);

  // Emit a breakingNews every 4 seconds
  setInterval(() => {
    emitter.emit('breakingNews', 'Breaking news! A BIG thing happened.');
  }, 4000);

  // Emit an error event after 5 seconds
  setTimeout(() => {
    emitter.emit('error', new Error('News feed connection error'));
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed();

// Attach event listeners

// Listener for 'newsEvent'
newsFeed.on('newsEvent', (data) => {
  console.log(`Received newsEvent: ${data}`);
});

// Listener for 'breakingNews'
newsFeed.on('breakingNews', (data) => {
  console.log(`Received breakingNews: ${data}`);
});

// Listener for 'error'
newsFeed.on('error', (error) => {
  console.error(`Received error: ${error.message}`);
});
