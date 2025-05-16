
    // Optional: Add more fireworks dynamically
    const fireworkContainer = document.body;

    function createFirework() {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.top = Math.random() * 100 + '%';
      firework.style.left = Math.random() * 100 + '%';
      firework.style.animationDuration = (Math.random() * 2 + 1) + 's';
      firework.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      fireworkContainer.appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 1000);
    }

    setInterval(createFirework, 1000);
