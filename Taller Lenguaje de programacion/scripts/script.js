const carousel = document.getElementById("carouselExampleCaptions");
const fondo = document.body;

carousel.addEventListener("slide.bs.carousel", function (event) {
  const indice = event.to;
  switch (indice) {
    case 0:
      fondo.style.backgroundColor = "#F0E68C";
      break;
    case 1:
      fondo.style.backgroundColor = "#D3D3D3";
      break;
    case 2:
      fondo.style.backgroundColor = "#FFD700";
      break;
  }
});

window.onscroll = function () {
  const botonArriba = document.getElementById("volver-arriba");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    botonArriba.style.display = "block";
  } else {
    botonArriba.style.display = "none";
  }
};

function irArriba() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const mensaje = document.getElementById("mensaje");
const contadorPalabras = document.getElementById("contador-palabras");

mensaje.addEventListener("input", function () {
  const palabras = mensaje.value.trim().split(/\s+/).filter(Boolean);
  contadorPalabras.textContent = palabras.length;
});

document
  .getElementById("formulario-contacto")
  .addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje) {
      alert("Por favor, complete todos los campos.");
      e.preventDefault();
    } else {
      alert("Formulario enviado correctamente.");
    }
  });
