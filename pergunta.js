const P = CONFIG.pergunta;
const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const opcoes = document.getElementById("opcoes");
const resposta = document.getElementById("resposta");
const continuar = document.getElementById("continuar");

document.getElementById("texto").textContent = P.texto;
sim.textContent = P.sim;
nao.textContent = P.nao;
resposta.textContent = P.respostaSim;
continuar.textContent = P.botaoContinuar;

// O "não" foge: ao passar o mouse ou encostar o dedo, pula pra outro lugar da tela
function fugir(e) {
  if (e) e.preventDefault();
  const margem = 12;
  const largura = nao.offsetWidth;
  const altura = nao.offsetHeight;

  if (!nao.classList.contains("solto")) {
    // primeira fuga: fixa o botão onde ele está (sem pular) e deixa um espaço no lugar
    const r = nao.getBoundingClientRect();
    opcoes.style.minWidth = opcoes.offsetWidth + "px";
    nao.style.left = r.left + "px";
    nao.style.top = r.top + "px";
    nao.classList.add("solto");
    nao.getBoundingClientRect(); // força o navegador a registrar a posição inicial
  }

  const rs = sim.getBoundingClientRect();
  let x, y, tentativas = 0;
  do {
    x = margem + Math.random() * (window.innerWidth - largura - margem * 2);
    y = margem + Math.random() * (window.innerHeight - altura - margem * 2);
    tentativas++;
    // não deixa cair em cima do "sim"
  } while (tentativas < 30 &&
           x < rs.right + 20 && x + largura > rs.left - 20 &&
           y < rs.bottom + 20 && y + altura > rs.top - 20);

  nao.style.left = x + "px";
  nao.style.top = y + "px";
}

nao.addEventListener("pointerenter", fugir);
nao.addEventListener("pointerdown", fugir);
nao.addEventListener("click", fugir);
nao.addEventListener("focus", fugir); // quem navega pelo teclado também não consegue

sim.addEventListener("click", () => {
  opcoes.classList.add("escondido");
  nao.classList.add("escondido");
  resposta.classList.remove("escondido");
  continuar.classList.remove("escondido");
});
