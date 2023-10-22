const playerShip = document.getElementById('player-ship');
const enemyShip = document.getElementById('enemy-ship');

const player = {
  x: 50, // initial X position
  y: 90, // initial Y position
  speed: 5, // player ship speed
};

const enemy = {
  x: 50, // initial X position
  y: 10, // initial Y position
  speed: 2, // enemy ship speed
};

function updatePlayer() {
  playerShip.style.left = `${player.x}px`;
  playerShip.style.bottom = `${player.y}px`;
}

function updateEnemy() {
  enemyShip.style.left = `${enemy.x}px`;
  enemyShip.style.top = `${enemy.y}px`;
}

function gameLoop() {
  // Move the player and enemy
  player.x += player.speed;
  enemy.x += enemy.speed;

  // Check for collisions
  if (
    player.x < enemy.x + 50 &&
    player.x + 50 > enemy.x &&
    player.y < enemy.y + 50 &&
    player.y + 50 > enemy.y
  ) {
    alert('Game Over!'); // Add game over logic
  }

  updatePlayer();
  updateEnemy();

  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft' && player.x > 0) {
    player.x -= player.speed;
  } else if (event.key === 'ArrowRight' && player.x + 50 < window.innerWidth) {
    player.x += player.speed;
  }
});

gameLoop();
