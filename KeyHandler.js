function keyPressed() {
  if (key === "g" || key === "G") {
    debugMode = !debugMode; // Turn debug mode on or off
  }
  if (keyCode === ENTER && gameState === "startScreen") {
    gameState = "playing"; // Start the game

    // Hide the start screen text
    let title = select(".game-title");
    let instructions = select(".game-instructions");
    if (title) title.style("display", "none");
    if (instructions) instructions.style("display", "none");

    // Start background music
    if (!bgMusic.isPlaying()) {
      bgMusic.loop();
    }
  } else if (keyCode === UP_ARROW && gameState === "playing" && !bob.isDead) {
    bob.jump(); // Bob jumps with UP_ARROW
  } else if ((key === "r" || key === "R") && gameState === "gameOver") {
    resetGame(); // Reset the game
    gameOverMusic.stop(); // Stop game over music

    // Hide the Game Over screen
    let endScreen = select(".end-screen");
    if (endScreen) endScreen.style("display", "none");

    gameOverMusic.stop(); // Stop game over music
  }
  // Set game difficultys
  else if (key === "1" && gameState === "startScreen") {
    bob.difficultyFactor = 0.25;
  } else if (key === "2" && gameState === "startScreen") {
    bob.difficultyFactor = 0.5;
  } else if (key === "3" && gameState === "startScreen") {
    bob.difficultyFactor = 1.0;
  } else if (key === "4" && gameState === "startScreen") {
    bob.difficultyFactor = 2.0;
  }
  // Instantly kill bob, to get into next gamestate
  else if (
    (key === "e" || key === "E") &&
    gameState === "playing" &&
    debugMode === true
  ) {
    bob.isDead = true;
  }
  // Go to startscreen
  else if (
    (key === "w" || key === "W") &&
    (debugMode === true || gameState === "gameOver")
  ) {
    resetGame();
    if ((gameState = "gameOver")) {
      gameOverMusic.stop(); // Stop game over music

      // Hide the Game Over screen
      let endScreen = select(".end-screen");
      if (endScreen) endScreen.style("display", "none");

      gameOverMusic.stop(); // Stop game over music
    }

    gameState = "startScreen";
  }
  // Switch on/off godmode
  else if ((key === "q" || key === "Q") && debugMode === true) {
    let currentTime = millis();
    if (currentTime - lastToggleTime > toggleCooldown) {
      bob.godMode = !bob.godMode; // === false ? true : false;
      lastToggleTime = currentTime;
    }
  }
}
