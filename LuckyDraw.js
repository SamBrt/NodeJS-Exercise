function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

  // Define an array of players
const players = ['Joe', 'Caroline', 'Sabrina'];

// Create a promise chain to handle each player's lucky draw
players.reduce((promiseChain, player) => {
  return promiseChain
    .then(() => luckyDraw(player))
    .then(result => {
      // Log the result if resolved
      console.log(result);
    })
    .catch(error => {
      // Log the error if rejected
      console.error(error.message);
    });
}, Promise.resolve()) // Start with a resolved promise
  .finally(() => {
    // Optional: You can log a final message if needed
    console.log('All draws are complete.');
  });
  

