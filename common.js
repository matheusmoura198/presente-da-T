const FOTO_VAZIA = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#f0a6c8"/>' +
  '<path d="M50 72 L30 52 C22 43 28 31 38 31 C44 31 48 35 50 39 C52 35 56 31 62 31 C72 31 78 43 70 52 Z" fill="#fbf6f8"/></svg>'
);

function criarPolaroid(foto) {
  const fig = document.createElement("figure");
  fig.className = "polaroid";
  const img = document.createElement("img");
  img.src = foto.src;
  img.alt = foto.legenda || "";
  img.loading = "lazy";
  img.draggable = false;
  img.onerror = () => { img.onerror = null; img.src = FOTO_VAZIA; };
  const cap = document.createElement("figcaption");
  cap.textContent = foto.legenda || "";
  fig.append(img, cap);
  return fig;
}
