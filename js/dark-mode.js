document.addEventListener("DOMContentLoaded", function () {
  const botonModo = document.getElementById("modoOscuroBtn");
  const body = document.body;

  botonModo.addEventListener("click", function () {
    body.classList.toggle("modo-oscuro");

    if (body.classList.contains("modo-oscuro")) {
      botonModo.textContent = "☀️ Modo Claro";
    } else {
      botonModo.textContent = "🌙 Modo Oscuro";
    }
  });
});
