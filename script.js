const cards = document.querySelectorAll(".card");
let current = 0;

function nextCard() {
  cards[current].classList.remove("active");
  current++;
  cards[current].classList.add("active");
}

function finalClick() {
  alert("Happy Valentine’s Day ❤️");
}

/* HEART GENERATOR */
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 400);
