class Lava {
  constructor() {
    this.x = bob.x - windowWidth - 450;
    this.y = 0;
    this.width = windowWidth / (3 / 4);
    this.height = windowHeight;
    this.tolerance = 5;
  }

  draw() {
    // Draw the floor
    fill(200, 70, 70);
    rect(this.x, this.y, this.width, this.height);
    this.update();
  }
  update() {
    if (bob.isBeingPushed) {
      //
      this.x -= blockArray[0].xVelocity;
    } else if (bob.isJumping != true) {
      this.x += 0.4 * bob.difficultyFactor;
    } else if (this.x > -windowWidth - 450 && bob.isJumping == true) {
      this.x -= bob.speedMultiplier / 2;
    }
    let lavaRightEdge = this.x + this.width;
    if (lavaRightEdge > windowWidth / 2 && bob.godMode != true) {
      // Kill bob if lava reaches middle of the screen, because allegedly bob is relative to the screen....
      bob.isDead = true;
      bob.reasonForDeath = "Wall of Lava";
    }
  }
}
