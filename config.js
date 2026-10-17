const CONFIG = {

  // ---------- PÁGINA 1: coração ----------
  inicio: {
    titulo: "Feliz aniversário, meu amor",
    palavraDoCoracao: "I love you",
    botao: "Abrir presente"
  },

  // ---------- PÁGINA 2: pergunta ----------
  pergunta: {
    texto: "Você me ama?",
    sim: "Sim",
    nao: "Não",
    respostaSim: "Eu sabia! Agora vem ver o que preparei pra você.",
    botaoContinuar: "Continuar"
  },

  // ---------- PÁGINA 3: polaroides espalhadas ----------
  // Adicione ou remova linhas à vontade.
  mural: {
    titulo: "Nossos momentos",
    dica: "Toque em uma foto para ver maior",
    botaoContinuar: "Continuar",
    fotos: [
      { src: "imagens/foto1.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto2.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto3.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto4.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto5.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto6.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto7.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto8.jpg", legenda: "Escreva uma legenda" }
    ]
  },

  // ---------- PÁGINA 4: carrossel ----------
  carrossel: {
    titulo: "Nossa história",
    botaoContinuar: "Continuar",
    segundosPorFoto: 4,
    fotos: [
      { src: "imagens/foto1.jpg", legenda: "Como tudo começou" },
      { src: "imagens/foto2.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto3.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto4.jpg", legenda: "Escreva uma legenda" },
      { src: "imagens/foto5.jpg", legenda: "Escreva uma legenda" }
    ]
  },

  // ---------- PÁGINA 5: carta ----------
  carta: {
    titulo: "Pra você",
    paragrafos: [
      "Escreva aqui o primeiro parágrafo da sua carta.",
      "Escreva aqui o segundo parágrafo. Pode ter quantos quiser.",
      "Feliz aniversário!"
    ],
    assinatura: "Com amor, seu nome",
    botaoVoltar: "Ver tudo de novo"
  }
};
