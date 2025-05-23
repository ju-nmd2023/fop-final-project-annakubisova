// Enemy.js
class Enemy {
  constructor() {
    this.x = random(width, width + 500); // Start off-screen
    this.type = random([1, 2]) === 1 ? "bird" : "monster"; //= type; // "bird" or "monster" // send in random here
    this.y = this.type === "bird" ? random(200, 230) : 200; // Birds fly, monsters stay on the ground
    this.size = this.type === "bird" ? 40 : 60;
    this.xVelocity = random(-2, -4) * bob.difficultyFactor; // Random speed
    this.hasPassed = false;
  }

  draw() {
    // Choose color based on type
    fill(this.type === "bird" ? color(255, 255, 0) : color(63, 127, 0)); // Different color for bird and monster
    ellipse(this.x, this.y, this.size);

    // Draw wings for birds or legs for monsters
    if (this.type === "bird") {
      triangle(
        this.x - 15,
        this.y,
        this.x + 15,
        this.y - 30,
        this.x + 15,
        this.y + 30
      );
    } else {
      rect(this.x, this.y + this.size / 2, 20, 30); // Legs
    }
  }

  update() {
    this.x += this.xVelocity;
    if (this.x < -this.size) {
      this.x = random(bob.x + width / 2, bob.x + width / 2 + 250); // Respawn when off-screen
      this.type = random([1, 2]) === 1 ? "bird" : "monster";
      this.y = this.type === "bird" ? random(200, 230) : 200; // Birds fly, monsters stay on the ground
      this.hasPassed = false;
    }
    let collided = this.checkCollision();
    if (collided) {
      // If collision == true then bob is dead
      bob.isDead = true;
      this.type === "bird"
        ? (bob.reasonForDeath = "Bird")
        : (bob.reasonForDeath = "Monster");
    }
    // If passed give points
    else if (
      collided != true &&
      bob.x > this.x + this.size &&
      this.hasPassed != true
    ) {
      bob.getPoints();
      this.hasPassed = true;
    }
  }

  checkCollision() {
    if (bob.invincible || bob.godMode) return false; // No collision if bob is invincible
    let distance = dist(this.x, this.y, bob.x, bob.y);
    return distance < this.size / 2 + bob.size / 2; // Check for collision
  }
}
