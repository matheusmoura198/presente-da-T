const C = CONFIG.carrossel;
const trilho = document.getElementById("trilho");
const contador = document.getElementById("contador");
document.getElementById("titulo").textContent = C.titulo;
document.getElementById("continuar").textContent = C.botaoContinuar;

const total = C.fotos.length;
C.fotos.forEach(f => {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.appendChild(criarPolaroid(f));
  trilho.appendChild(slide);
});

let atual = 0;
let animando = false;
let timer = null;

function atualizarContador() { contador.textContent = `${atual + 1} / ${total}`; }
atualizarContador();

// Sempre anda da direita para a esquerda: a primeira foto vai pro fim da fila e o ciclo recomeça
function proxima() {
  if (animando || total < 2) return;
  animando = true;
  trilho.style.transition = "transform .6s ease";
  trilho.style.transform = "translateX(-100%)";
  trilho.addEventListener("transitionend", function fim() {
    trilho.removeEventListener("transitionend", fim);
    trilho.style.transition = "none";
    trilho.appendChild(trilho.firstElementChild);
    trilho.style.transform = "translateX(0)";
    atual = (atual + 1) % total;
    atualizarContador();
    animando = false;
  });
}

function anterior() {
  if (animando || total < 2) return;
  animando = true;
  trilho.style.transition = "none";
  trilho.insertBefore(trilho.lastElementChild, trilho.firstElementChild);
  trilho.style.transform = "translateX(-100%)";
  trilho.getBoundingClientRect(); // aplica a posição antes de animar
  trilho.style.transition = "transform .6s ease";
  trilho.style.transform = "translateX(0)";
  trilho.addEventListener("transitionend", function fim() {
    trilho.removeEventListener("transitionend", fim);
    atual = (atual - 1 + total) % total;
    atualizarContador();
    animando = false;
  });
}

function iniciarAuto() {
  clearInterval(timer);
  timer = setInterval(proxima, (C.segundosPorFoto || 4) * 1000);
}

document.getElementById("proxima").addEventListener("click", () => { proxima(); iniciarAuto(); });
document.getElementById("anterior").addEventListener("click", () => { anterior(); iniciarAuto(); });

// arrastar com o dedo / mouse
const caixa = document.getElementById("carrossel");
let inicioX = null;
caixa.addEventListener("pointerdown", e => { inicioX = e.clientX; });
caixa.addEventListener("pointerup", e => {
  if (inicioX === null) return;
  const dx = e.clientX - inicioX;
  inicioX = null;
  if (Math.abs(dx) > 40) { dx < 0 ? proxima() : anterior(); iniciarAuto(); }
});
caixa.addEventListener("pointercancel", () => { inicioX = null; });

// pausa quando o mouse está em cima
caixa.addEventListener("mouseenter", () => clearInterval(timer));
caixa.addEventListener("mouseleave", iniciarAuto);

iniciarAuto();
