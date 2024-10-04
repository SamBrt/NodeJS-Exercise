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

  // Define the async function to get results
async function agetResults() {
    // Define an array of players
    const players = ['Tina', 'Jorge', 'Julien'];
  
    // Loop through each player
    for (const player of players) {
      try {
        // Await the result of luckyDraw for each player
        const result = await luckyDraw(player);
        // Log the result if resolved
        console.log(result);
      } catch (error) {
        // Log the error if rejected
        console.error(error.message);
      }
    }
  
    // Optional: Log a final message when all draws are complete
    console.log('All draws are complete.');
  }
  
  // Call the async function
  agetResults();
    