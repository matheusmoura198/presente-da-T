const M = CONFIG.mural;
const mural = document.getElementById("mural");
document.getElementById("titulo").textContent = M.titulo;
document.getElementById("dica").textContent = M.dica;
document.getElementById("continuar").textContent = M.botaoContinuar;

const itens = M.fotos.map(criarPolaroid);
itens.forEach(el => mural.appendChild(el));

// números "aleatórios" fixos, para o mural não embaralhar quando a tela muda de tamanho
function sorteio(seed) {
  let a = seed * 9301 + 49297;
  a = (a * 233280 + 1) % 2147483647;
  return (a % 1000) / 1000;
}

function espalhar() {
  const w = mural.clientWidth;
  const colunas = w < 520 ? 2 : w < 900 ? 3 : 4;
  const larg = Math.min(220, (w / colunas) * 0.82);
  const alt = larg * 1.3;
  const celulaW = w / colunas;
  const celulaH = alt * 1.12;
  const linhas = Math.ceil(itens.length / colunas);
  mural.style.height = linhas * celulaH + alt * 0.3 + "px";

  itens.forEach((el, i) => {
    const col = i % colunas;
    const lin = Math.floor(i / colunas);
    const folgaX = Math.max(0, celulaW - larg);
    const x = col * celulaW + folgaX * (0.1 + sorteio(i + 1) * 0.8);
    const y = lin * celulaH + (sorteio(i + 50) - 0.5) * alt * 0.22 + alt * 0.1;
    el.style.width = larg + "px";
    el.style.left = Math.max(0, Math.min(w - larg, x)) + "px";
    el.style.top = Math.max(0, y) + "px";
    el.style.setProperty("--r", (sorteio(i + 100) * 20 - 10).toFixed(1) + "deg");
    el.style.setProperty("--zoom", w < 520 ? "1.3" : "1.5");
  });
}

espalhar();
window.addEventListener("resize", espalhar);

// tocar numa foto traz ela pra frente; tocar de novo (ou fora) fecha
let aberta = null;
mural.addEventListener("click", e => {
  const alvo = e.target.closest(".polaroid");
  if (aberta && aberta !== alvo) aberta.classList.remove("ativa");
  if (alvo) { alvo.classList.toggle("ativa"); aberta = alvo.classList.contains("ativa") ? alvo : null; }
  else aberta = null;
});
document.addEventListener("click", e => {
  if (aberta && !e.target.closest(".polaroid")) { aberta.classList.remove("ativa"); aberta = null; }
});
