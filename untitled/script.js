function createPowerUp() {
  if (gameOver) return;

  const powerUp = document.createElement('div');
  powerUp.classList.add('power-up');
  powerUp.style.left = Math.random() * (window.innerWidth - 20) + 'px';
  powerUp.style.top = '0px';
  gameContainer.appendChild(powerUp);
  movePowerUp(powerUp);
}

function movePowerUp(powerUp) {
  const interval = setInterval(() => {
    if (gameOver) {
      clearInterval(interval);
      return;
    }

    const powerUpRect = powerUp.getBoundingClientRect();
    if (powerUpRect.top > window.innerHeight) {
      clearInterval(interval);
      powerUp.remove();
    } else {
      powerUp.style.top = powerUpRect.top + 3 + 'px';
      if (detectPlayerCollision(powerUp)) {
        clearInterval(interval);
        applyPowerUpEffect();
        powerUp.remove();
      }
    }
  }, 20);
}

function applyPowerUpEffect() {
  // 파워업 효과 적용 (예: 점수 증가)
  score += 50;
  scoreDisplay.innerText = 'Score: ' + score;
}

// 파워업 생성 간격
setInterval(createPowerUp, 15000);
