const heart = document.getElementById("heart");
document.getElementById("titulo").textContent = CONFIG.inicio.titulo;
document.getElementById("botao").textContent = CONFIG.inicio.botao;

const celular = window.innerWidth < 600;
const quantidade = celular ? 70 : 100;

// tamanho do coração se adapta à tela
const escala = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.55) / 34;
const tamanhoFonte = Math.max(10, escala * 1.3);

for (let i = 0; i < quantidade; i++) {
  const palavra = document.createElement("span");
  palavra.classList.add("love_word");
  palavra.innerText = CONFIG.inicio.palavraDoCoracao;
  palavra.style.fontSize = `${tamanhoFonte}px`;

  const t = (Math.PI * 2 * i) / quantidade;
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

  palavra.style.left = `calc(50% + ${x * escala}px)`;
  palavra.style.top = `calc(50% + ${y * escala}px)`;
  palavra.style.animationDelay = `${i * 0.03}s`;

  heart.appendChild(palavra);
}
