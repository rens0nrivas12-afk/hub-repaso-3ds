document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-modulos");
  
  if (typeof modulosAnno !== "undefined" && modulosAnno.length > 0) {
    contenedor.innerHTML = modulosAnno.map(mod => `
      <div class="tarjeta-modulo">
        <h3>${mod.nombre}</h3>
        <p><strong>Docente:</strong> ${mod.docente}</p>
        <span class="badge">${mod.estado}</span>
      </div>
    `).join('');
  } else {
    contenedor.innerHTML = "<p>No hay módulos cargados.</p>";
  }
});