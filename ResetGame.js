// Function to reset the game
function resetGame() {
  // Reset block
  bob = new Player();
  bob.x = 0;
  bob.y = bobBaseY;
  bob.points = 0;
  bob.isDead = false;

  // Reset floor, enemies and lava
  floor = new Floor();
  lava = new Lava();
  enemy = new Enemy();

  // Reset blocks
  blockArray = [];
  for (let i = 0; i < nrOfBlocks; i++) {
    blockArray[i] =
      i === 0 ? new Block(bob.x + 1200) : new Block(blockArray[i - 1].x + 400);
  }
  // Reset spikes
  spikeArray = [];
  for (let i = 0; i < nrOfSpikes; i++) {
    spikeArray[i] = new Spike(
      i === 0 ? bob.x + 600 : spikeArray[i - 1].x + 400
    );
  }

  // Reset powerups
  powerups = [];
  for (let i = 0; i < nrOfPowerups; i++) {
    powerups.push(new Powerup(random(bob.x + 500, bob.x + 1000)));
  }

  gameState = "playing";
}
