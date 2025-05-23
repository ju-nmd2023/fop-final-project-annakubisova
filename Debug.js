// Display debugging information on the right-middle of the screen
function debugFunction() {
  fill(0);
  textSize(25);
  // Calculate fixed x-position near the right edge, offset by 50 pixels
  let xPos = width - 250; // 250 pixels from the right edge
  // Calculate starting y-position for the middle, and then space each line by 30 pixels
  let yPos = height / 2 - 650; // Start near the middle of the screen, offset upwards

  // bob.godMode = false

  switch (gameState) {
    case "startScreen":
      // Calculate fixed x-position near the right edge, offset by 50 pixels
      xPos = width - 150; // 250 pixels from the right edge
      // Calculate starting y-position for the middle, and then space each line by 30 pixels
      yPos = height / 2 - 300; // Start near the middle of the screen, offset upwards
      break;
    case "playing":
      // Calculate fixed x-position near the right edge, offset by 50 pixels
      xPos = bob.x + 500; // 250 pixels from the right edge
      // Calculate starting y-position for the middle, and then space each line by 30 pixels
      yPos = height / 2 - 650; // Start near the middle of the screen, offset upwards
      break;
    case "gameOver":
      // Calculate fixed x-position near the right edge, offset by 50 pixels
      xPos = width - 150; // 250 pixels from the right edge
      // Calculate starting y-position for the middle, and then space each line by 30 pixels
      yPos = height / 2 - 300; // Start near the middle of the screen, offset upwards
      break;
    default:
      console.log("Error placing debug text.");
      break;
  }
  let lavaEdge = lava.x + lava.width;
  // Display debug information with vertical spacing of 30 pixels
  text("Y_index of bob: " + bob.y, xPos, yPos);
  text("X_index of bob: " + bob.x, xPos, yPos + 30);
  text("WindowWidth: " + windowWidth, xPos, yPos + 60);
  text("WindowHeight: " + windowHeight, xPos, yPos + 90);
  text("X of floor: " + floor.x, xPos, yPos + 120);
  text("Dead: " + bob.isDead, xPos, yPos + 180); // Dead status
  text("Points: " + bob.points, xPos, bob.y + 150);
  text("Godmode: " + bob.godMode, xPos, yPos + 210);
  text("Invincible from pwr: " + bob.invincible, xPos, yPos + 240);
  text("Gamestate: " + gameState, xPos - 300, yPos + 240);
  text("Lava Edge: " + lavaEdge, xPos - 300, yPos + 270);
}
