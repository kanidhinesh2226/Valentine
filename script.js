* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: radial-gradient(circle, #1a1a1a, #000);
  color: white;
  overflow: hidden;
}

.container {
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
}

.card {
  position: absolute;
  width: 90%;
  max-width: 360px;
  padding: 30px;
  background: rgba(255,255,255,0.06);
  border-radius: 26px;
  text-align: center;
  opacity: 0;
  transform: rotateY(25deg) scale(0.9);
  transition: all 0.8s ease;
  backdrop-filter: blur(12px);
}

.card.active {
  opacity: 1;
  transform: rotateY(0deg) scale(1);
}

/* VIDEO */
.hero-video {
  width: 240px;
  max-width: 90%;
  border-radius: 20px;
  margin: 10px auto 20px;
  display: block;
  transform: perspective(800px) rotateY(-6deg);
  box-shadow: 0 20px 50px rgba(255,77,109,0.45);
}

h2 {
  font-size: 24px;
  margin: 10px 0;
}

p {
  font-size: 15px;
  opacity: 0.85;
}

button {
  margin-top: 20px;
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  background: #ff4d6d;
  color: white;
  font-size: 15px;
  cursor: pointer;
}

/* HEARTS */
.hearts {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
}

.heart {
  position: absolute;
  width: 16px;
  height: 16px;
  background: rgba(255,77,109,0.6);
  transform: rotate(45deg);
  animation: floatUp 6s linear infinite;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  background: rgba(255,77,109,0.6);
  border-radius: 50%;
}

.heart::before { top: -8px; }
.heart::after { left: -8px; }

@keyframes floatUp {
  from {
    transform: translateY(100vh) rotate(45deg);
    opacity: 1;
  }
  to {
    transform: translateY(-10vh) rotate(45deg);
    opacity: 0;
  }
}
