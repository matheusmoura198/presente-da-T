const K = CONFIG.carta;
document.getElementById("titulo").textContent = K.titulo;
document.getElementById("assinatura").textContent = K.assinatura;
document.getElementById("voltar").textContent = K.botaoVoltar;
const texto = document.getElementById("texto");
K.paragrafos.forEach(t => {
  const p = document.createElement("p");
  p.textContent = t;
  texto.appendChild(p);
});
