const colors = ['#f2f2f2', '#e0e0e0', '#d0d0d0']; // Cores neutras

let currentIndex = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 3000); // Altera a cor a cada 3 segundos (3000ms)
