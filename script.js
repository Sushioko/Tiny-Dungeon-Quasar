const player = {
  name: "Captain",
  health: 100,
  attack: 10,
  defense: 5,
  inventory: []
};

const enemies = [
  { name: "Alien", health: 30, attack: 5 },
  { name: "Robot", health: 40, attack: 8 }
  // Add more enemies here
];

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const npc = {
  name: "Alien Trader",
  dialogue: "Welcome, traveler! Would you like to trade?",
  trade: (player) => {
    // Implement trading logic here
  }
};

document.addEventListener("keydown", function(event) {
  switch(event.key) {
    case "ArrowUp":
      // Move character up
      break;
    case "ArrowDown":
      // Move character down
      break;
    case "ArrowLeft":
      // Move character left
      break;
    case "ArrowRight":
      // Move character right
      break;
  }
});

function drawCharacter(character) {
  // Implement character rendering logic using ctx.drawImage()
}

function drawEnemy(enemy) {
  // Implement enemy rendering logic
}

function drawBackground() {
  // Implement background rendering
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Render game elements here
  drawBackground();
  drawCharacter(player);
  drawEnemies(); // Loop through enemies and draw them
  
  // Update game logic here
  
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
