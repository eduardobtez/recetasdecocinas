document.addEventListener("DOMContentLoaded", function () {
  const botonModo = document.getElementById("modoOscuroBtn");
  const cuerpo = document.body;

  botonModo.addEventListener("click", function () {
    cuerpo.classList.toggle("modo-oscuro");

    if (cuerpo.classList.contains("modo-oscuro")) {
      botonModo.textContent = "☀️ Modo Claro";
    } else {
      botonModo.textContent = "🌙 Modo Oscuro";
    }
  });
});
