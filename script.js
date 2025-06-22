// 🌗 Toggle dark/light theme
function toggleTheme() {
  const html = document.documentElement;
  html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

// 💌 EmailJS init and form handler
emailjs.init("zPa13Fu9gXk2I4VqQ");
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm('service_c3ecxar', 'template_rcflscr', this)
    .then(() => alert("Message sent successfully!"), () => alert("Failed to send message."));
});

// 🔁 Music Playlist
const playlist = ["./audio/1.mp3", "./audio/2.mp3", "./audio/3.mp3"];
let currentTrack = 0;
const audio = document.getElementById("bg-music");

audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  audio.src = playlist[currentTrack];
  audio.play();
});

function playMusic() {
  audio.src = playlist[currentTrack];
  audio.play();
  document.getElementById("music-popup").style.display = "none";
}
function closePopup() {
  document.getElementById("music-popup").style.display = "none";
}

// ⭕ Custom Cursor Circle
const cursor = document.getElementById("cursor-circle");
document.body.style.cursor = "none"; // Hide system cursor

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;

  // 🌟 Sparkling star on move
  createStar(e.clientX, e.clientY);
});

// 📏 Grow/Shrink cursor on scroll
let isScrolling;
window.addEventListener("scroll", () => {
  cursor.style.width = "70px";
  cursor.style.height = "70px";
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    cursor.style.width = "40px";
    cursor.style.height = "40px";
  }, 300);

  // 🌠 Sparkling stars on scroll
  for (let i = 0; i < 2; i++) {
    const x = window.innerWidth * Math.random();
    const y = window.scrollY + window.innerHeight * Math.random();
    createStar(x, y);
  }
});

// 🌟 Create sparkling star (★)
function createStar(x, y) {
  const star = document.createElement("div");
  star.className = "star";
  star.innerText = "★"; // Unicode star
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 800);
}
