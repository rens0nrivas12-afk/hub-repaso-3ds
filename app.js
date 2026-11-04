import { modulosAnno } from './modulos.js';

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-modulos");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    modulosAnno.forEach(modulo => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.style.borderTop = `3px solid ${modulo.color}`;

        tarjeta.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; gap: 10px;">
                <h3 style="color: ${modulo.color}; font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; margin: 0; line-height: 1.35; font-weight: 700;">${modulo.nombre}</h3>
                <span style="background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.3); padding: 3px 10px; border-radius: 999px; font-size: 0.72rem; font-weight: 600; white-space: nowrap;">${modulo.estado}</span>
            </div>
            <p style="color: #94a3b8; font-size: 0.88rem; margin: 0 0 10px 0;">
              <strong style="color: #cbd5e1;">Docente:</strong> ${modulo.docente}
            </p>
            <p style="color: #e2e8f0; font-size: 0.92rem; margin: 0 0 16px 0; line-height: 1.55;">${modulo.resumen}</p>
            
            <div style="background: rgba(3, 7, 18, 0.6); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 10px; padding: 14px; margin-bottom: 16px;">
                <span style="font-size: 0.75rem; color: ${modulo.color}; display: block; margin-bottom: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Ejercicios y Tareas Clave</span>
                <ul style="padding-left: 18px; margin: 0; font-size: 0.86rem; color: #cbd5e1; line-height: 1.6;">
                    ${modulo.ejercicios.map(ej => `<li>${ej}</li>`).join('')}
                </ul>
            </div>

            <div style="border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 12px;">
                <span style="font-size: 0.75rem; color: #94a3b8; display: block; margin-bottom: 8px; font-weight: 600;">Herramientas:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${modulo.herramientas.map(h => `
                      <span style="background: rgba(255, 255, 255, 0.04); color: ${modulo.color}; padding: 3px 10px; border-radius: 8px; font-size: 0.78rem; border: 1px solid rgba(255, 255, 255, 0.08); font-weight: 500;">${h}</span>
                    `).join('')}
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
});