let difficulty = "";
// File to draw the non-class graphics of the game
function drawStartScreen() {
    fill(0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Endless Runner 🏃‍♂️", width / 2, height / 2 - 50);
    textSize(30);
    text("Press ENTER to start the game", width / 2, height / 2 + 50);
    textSize(25);
    switch (bob.difficultyFactor) { // Change difficulty factor to a string to visualize in menu
      case 0.25:
        difficulty = "Easy";
        break;
      case 0.50:
        difficulty = "Medium";
        break;
      case 1.0:
          difficulty = "Hard";
        break;
      default:
        difficulty = "Chaoz and Anarchy";
        break;
    }
    text("Difficulty: " + difficulty, width / 2, height / 2 + 90);
    
    // Display debugging info
    if (debugMode === true)
    {
      debugFunction();
    }
}

// Function to draw the game over screen
function drawGameOver() {
  background(135, 206, 235);
  fill(0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width / 2, height / 2 - 50);
  textSize(30);
  text("Press R to restart the game, W to go to main menu", width / 2, height / 2 + 50);
  text("Score: " + bob.points, width / 2, height / 2 + 100);
  text("You died by: " + bob.reasonForDeath + "!", width / 2, height / 2 + 150);
  if (debugMode === true)
  {
    debugFunction();
  }
    // Display debugging info
    // Show the game over screen
    let endScreen = select(".end-screen");
    if (endScreen) endScreen.style("display", "block");
  
    // Play game over music only once
    if (!gameOverMusic.isPlaying()) {
      gameOverMusic.play();
    }
}
  
// Function to draw the background, sun, and clouds
function drawBackground() {
    // Automatically cycle sky colors (moved inside drawBackground)
    skyTimer += 0.01;
    skyColor.r = map(sin(skyTimer), -1, 1, 155, 255); // Red cycling
    skyColor.g = map(sin(skyTimer + PI / 3), -1, 1, 186, 206); // Green cycling
    skyColor.b = map(sin(skyTimer + (2 * PI) / 3), -1, 1, 255, 135); // Blue cycling
  
    background(skyColor.r, skyColor.g, skyColor.b);
  
    // Draw sun
    fill(255, 204, 0);
    ellipse(width - 300, 150, 150);
    // Draw eyes
    fill(0); // Black for the eyes
    ellipse(width - 320, 130, 15, 15); // Left eye
    ellipse(width - 280, 130, 15, 15); // Right eye

    // Draw smile
    noFill(); // No fill for the arc
    stroke(0); // Black stroke for the smile
    strokeWeight(3); // Thicker stroke for visibility
    arc(width - 300, 160, 80, 50, 0, PI); // Arc for the smile

    // Draw beams
    stroke(255, 204, 0); // Same color as the sun
    strokeWeight(5); // Slightly thicker for the beams
    let centerX = width - 300;
    let centerY = 150;
    let sunRadius = 75; // Half the sun's diameter
    let beamLength = 100; // Length of the beams

    for (let i = 0; i < 7; i++) {
        let angle = (TWO_PI / 7) * i; // Divide 360° into 7 equal parts
        let x1 = centerX + cos(angle) * sunRadius; // Starting point of the beam
        let y1 = centerY + sin(angle) * sunRadius;
        let x2 = centerX + cos(angle) * (sunRadius + beamLength); // End point of the beam
        let y2 = centerY + sin(angle) * (sunRadius + beamLength);
        line(x1, y1, x2, y2); // Draw the beam
    }

    // Draw mountains
    fill(220);
    noStroke();
    triangle(100, height, 500, height, 300, 100); // Mountain 1
    fill(200);
    triangle(300, height, 500, height, 400, 200); // Mountain 2
  
    // Draw clouds
    clouds.forEach((cloud) => {
      makeCloud(cloud.x, cloud.y);
      cloud.x += 0.3;
  
      // Reset cloud position when it moves off-screen
      if (cloud.x > width) {
        cloud.x = -100;
      }
    });
}

// Function to draw clouds
function makeCloud(cloudx, cloudy) {
    fill(250);
    noStroke();
    ellipse(cloudx, cloudy, 40, 20);
    ellipse(cloudx + 20, cloudy + 10, 70, 50);
    ellipse(cloudx - 20, cloudy + 10, 70, 50);
    ellipse(cloudx - 70, cloudy + 10, 70, 50);
  }