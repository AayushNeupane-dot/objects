// Fireworks: Burst on Click
const fireworkContainer = document.getElementById("firework-container");

fireworkContainer.addEventListener("click", (e) => {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.left = `${e.clientX - fireworkContainer.offsetLeft}px`;
  firework.style.top = `${e.clientY - fireworkContainer.offsetTop}px`;
  fireworkContainer.appendChild(firework);

  // Remove the firework after animation ends
  setTimeout(() => firework.remove(), 1000);
});

// Dynamic Bubble Creation
const bubbleContainer = document.getElementById("dynamic-bubbles");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${2 + Math.random() * 3}s`;
  bubbleContainer.appendChild(bubble);

  // Remove bubble after animation
  setTimeout(() => bubble.remove(), 5000);
}

// Generate bubbles every second
setInterval(createBubble, 1000);

// Interactive Gradient Text
const interactiveText = document.getElementById("interactive-text");
const changeGradientButton = document.getElementById("change-gradient");

changeGradientButton.addEventListener("click", () => {
  const gradients = [
    "linear-gradient(90deg, red, yellow, green)",
    "linear-gradient(90deg, blue, purple, pink)",
    "linear-gradient(90deg, orange, cyan, lime)",
    "linear-gradient(90deg, indigo, violet, teal)",
  ];
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  interactiveText.style.backgroundImage = randomGradient;
});

// 3D Flip Card: Auto-Reset
const flipCard = document.getElementById("flip-card");
const flipCardInner = flipCard.querySelector(".flip-card-inner");

flipCard.addEventListener("mouseenter", () => {
  flipCardInner.style.transform = "rotateY(180deg)";
});

flipCard.addEventListener("mouseleave", () => {
  setTimeout(() => {
    flipCardInner.style.transform = "rotateY(0deg)";
  }, 3000); // Auto-reset after 3 seconds
});
