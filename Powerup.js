// Powerup.js
class Powerup {
  constructor(x) {
    this.x = x;
    this.y = random(300, 400) - bobBaseY;
    this.size = 40;
    this.type = random(["speed", "invincible", "doublePoints"]); // 'speed' or 'invincibility' or 'doublePoints'
  }

  draw() {
    //    fill(this.type === "speed" ? color(255, 165, 0) : color(0, 255, 255));
    switch (this.type) {
      case "speed":
        fill(color(255, 165, 0));
        break;
      case "invincible":
        fill(color(0, 255, 255));
        break;
      case "doublePoints":
        fill(color(255, 255, 255));
        break;
      default:
        console.log("Error colouring powerups.");
        break;
    }
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.x -= 2; // Move powerup to the left
    if (this.x < bob.x - windowWidth / 2) {
      this.changePowerup();
    }
  }

  checkCollision(player) {
    return (
      dist(this.x, this.y, player.x, player.y) < this.size / 2 + player.size / 2
    );
  }

  applyEffect(player) {
    if (this.type === "speed") {
      player.speedBoost();
    } else if (this.type === "invincible") {
      player.invincibility();
    } else {
      player.doublePointsFunction();
    }
    powerupSound.play();
  }
  changePowerup() {
    // Move and change type
    this.x = random(bob.x + 1000, bob.x + 1500);
    this.y = random(300, 400) - bobBaseY;
    this.type = random(["speed", "invincible", "doublePoints"]);
  }
}
