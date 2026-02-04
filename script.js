// script.js

function scrollToStory() {
  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });
}

function yesClick() {
  alert("Happy Valentine’s Day ❤️\nYou mean everything to me.");
}

function talkClick() {
  // CHANGE THIS NUMBER
  window.location.href = "https://wa.me/919840077017";
}

/* HEART BACKGROUND LOGIC */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.opacity = Math.random();

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 400);
