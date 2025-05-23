function playGame() {
  drawBackground();
  floor.draw();
  push(); // Save current transformation state
  translate(-bob.x + width / 2 - bob.size / 2, 350);
  // Display debugging info
  if (debugMode === true) {
    debugFunction();
  }
  spikeArray.forEach((spike) => {
    spike.update();
    spike.draw();
  });
  blockArray.forEach((block) => {
    block.draw();
    block.update();
  });
  powerups.forEach((powerup) => {
    powerup.update();
    powerup.draw();
    if (powerup.checkCollision(bob)) {
      powerup.applyEffect(bob);
      powerup.changePowerup();
    }
  });
  enemy.draw();
  enemy.update();
  bob.update();
  bob.draw();

  pop(); // Restore the original transformation state
  lava.draw();
  bob.drawPoints();

  // Check if bob is dead and switch to 'Game Over' state
  if (bob.isDead) {
    gameState = "gameOver";
    gameOverMusic.play();
  }
}
