// Endless Runner game was made with help and by courtesy of Felix Stockinger (stfe20sz@student.ju.se)
// The following lines of code were also made with assistance of ChatGPT; links to chats: https://chatgpt.com/share/67094f38-4324-8004-8851-f36f63426d48, https://chatgpt.com/share/67097073-2a34-8000-93dc-23a7f2a9126f
// Assistance was also taken from https://www.w3schools.com/js/js_classes.asp
// Sounds for the game were used and downloaded from https://freesound.org

let drawable = [];
let blockArray = [];
let spikeArray = []; // add spikes to own list, - this would make it possible to have multiple instances of spikes at the same time
let clouds = []; //define clouds array globally
let powerups = []; // powerups array
const nrOfBlocks = 1;
const nrOfSpikes = 10; // lowered bcs of blocks implemented
const nrOfPowerups = 2;
let skyColor = { r: 155, g: 186, b: 255 }; // Sky color object for automatic color change
let skyTimer = 0; // Timer to control sky color changes
let debugMode = false; // Activate or deactivate debug mode
let lastToggleTime  = 0; //defining debounce variables
const toggleCooldown = 200;

let bob; // Initialize variable for Player
let floor;
let lava;
let enemy;
let gameState = "startScreen"; // Set the initial state to startScreen
let bgMusic;
let jumpSound;
let powerupSound;
let bobDiedSound;
let gameOverMusic;
let bobBaseY = 200;
let firstDigit = 0;
let firstDigitBuffer = 1;

function preload() {
  bgMusic = loadSound("assets/background.wav");
  jumpSound = loadSound("assets/jump.wav");
  bobDiedSound = loadSound("assets/bobdied.wav");
  gameOverMusic = loadSound("assets/gameover.wav");
  powerupSound = loadSound("assets/powerup.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initialize player, floor, enemies and Lava inside setup
  bob = new Player();
  enemy = new Enemy();
  floor = new Floor();
  lava = new Lava();
  drawable.push(bob);
  drawable.push(floor);
  drawable.push(lava);

  // Create  clouds with random starting positions
  for (let i = 3; i < 10; i++) {
    clouds.push({ x: random(width), y: random(70, 200) }); // Random x and y for each cloud
  }

  // Create spikes
  for (let i = 0; i < nrOfSpikes; i++) {
    spikeArray[i] =
      i === 0 ? new Spike(bob.x + 600) : new Spike(spikeArray[i - 1].x + 400);
  }
  // Create Blocks
  for (let i = 0; i < nrOfBlocks; i++) {
    blockArray[i] = 
    i === 0 ? new Block(bob.x + 1200) : new Block(blockArray[i - 1].x + 400);
  }
  // Create powerups
  for (let i = 0; i < nrOfPowerups; i++) {
    powerups.push(new Powerup(random(bob.x + 500, bob.x + 1000)));
  }
}

function draw() {
  drawBackground();
  if (gameState === "startScreen") {
    drawStartScreen();
  } else if (gameState === "playing") {
    playGame();
  } else if (gameState === "gameOver") {
    drawGameOver();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
