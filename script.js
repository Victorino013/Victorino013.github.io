document.addEventListener("DOMContentLoaded", function() {
  // Optimización para móvil
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const sunflowerInterval = isMobile ? 800 : 500;

  // Lluvia de girasoles optimizada
  function createSunflower() {
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    sunflower.innerHTML = '🌻';
    sunflower.style.left = Math.random() * 100 + 'vw';
    sunflower.style.animationDuration = (Math.random() * 3 + 5) + 's';
    document.body.appendChild(sunflower);

    sunflower.addEventListener('click', () => {
      sunflower.style.transform = 'scale(1.5)';
      setTimeout(() => sunflower.remove(), 300);
    });

    setTimeout(() => sunflower.remove(), 8000);
  }

  setInterval(createSunflower, sunflowerInterval);

  // Efecto táctil optimizado
  document.body.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    const clickEffect = document.createElement('div');
    clickEffect.className = 'sunflower';
    clickEffect.innerHTML = '🌻';
    clickEffect.style.position = 'fixed';
    clickEffect.style.left = touch.clientX + 'px';
    clickEffect.style.top = touch.clientY + 'px';
    clickEffect.style.animation = 'pulse 0.5s ease-out';
    document.body.appendChild(clickEffect);
    
    setTimeout(() => clickEffect.remove(), 500);
  });
});