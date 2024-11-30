// Words to cycle through
const words = ["LEARNER", "SEEKER", "ADVENTURER"];
let currentIndex = 0;

// Target the glitch text element
const glitchText = document.getElementById("glitch-text");

// Function to update the text
function updateText() {
    // Update the text content
    currentIndex = (currentIndex + 1) % words.length;
    glitchText.textContent = words[currentIndex];
}

// Change the text every 2 seconds
setInterval(updateText, 2000);

