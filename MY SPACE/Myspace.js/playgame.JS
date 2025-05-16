
    const activities = [
      "🎬 Watch a movie",
      "🕹️ Play a game",
      "💌 Write a letter",
      "🚶 Take a walk",
      "🎧 Listen to music",
      "🍳 Cook together",
      "🎵 Play music",
      "📖 Read a book",
      "🧺 Have a picnic"
    ];

    function spinWheel() {
      const resultDiv = document.getElementById('result');
      const wheel = document.getElementById('wheel');

      // Randomly choose an activity
      const randomIndex = Math.floor(Math.random() * activities.length);
      const selectedActivity = activities[randomIndex];

      // Calculate rotation angle (9 segments)
      const angle = 360 / 9 * randomIndex;

      // Apply rotation
      wheel.style.transform = `rotate(${angle}deg)`;

      // Show result
      resultDiv.textContent = `🎁 You should: ${selectedActivity}`;
    }
