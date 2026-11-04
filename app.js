document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente cargado.");

    // Obtenemos los módulos desde el objeto global de la ventana
    const listaModulos = window.modulosAnno;

    if (typeof listaModulos !== "undefined" && Array.isArray(listaModulos)) {
        console.log("¡Módulos detectados con éxito!", listaModulos);
        
        const contenedor = document.getElementById("contenedor-modulos");
        
        if (contenedor) {
            contenedor.innerHTML = ""; // Limpiamos por seguridad
            
            // Creamos un diseño de cuadrícula flexible
            contenedor.style.display = "grid";
            contenedor.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";
            contenedor.style.gap = "20px";
            contenedor.style.marginTop = "20px";

            listaModulos.forEach(modulo => {
                const tarjeta = document.createElement("div");
                tarjeta.className = "tarjeta-modulo";
                
                tarjeta.style.cssText = `
                    background: #0f1630; 
                    border: 1px solid #222c55; 
                    border-left: 4px solid #22d3ee;
                    border-radius: 12px; 
                    padding: 22px; 
                    color: #e8edfb;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
                `;

                tarjeta.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                        <h3 style="color: #22d3ee; font-size: 18px; margin: 0;">${modulo.nombre}</h3>
                        <span style="background: #141c3d; color: #34f5a0; border: 1px solid #34f5a0; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: bold;">${modulo.estado}</span>
                    </div>
                    <p style="color: #9ba7ce; font-size: 14px; margin-bottom: 10px;"><b>Docente:</b> ${modulo.docente}</p>
                    <p style="color: #e8edfb; font-size: 14.5px; margin-bottom: 15px; line-height: 1.5;">${modulo.resumen}</p>
                    <div style="border-top: 1px dashed #222c55; padding-top: 10px;">
                        <span style="font-size: 12px; color: #9ba7ce; display: block; margin-bottom: 6px;">Herramientas:</span>
                        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                            ${modulo.herramientas.map(h => `<span style="background: #141c3d; color: #22d3ee; padding: 2px 8px; border-radius: 6px; font-size: 11px; border: 1px solid #222c55;">${h}</span>`).join('')}
                        </div>
                    </div>
                `;

                contenedor.appendChild(tarjeta);
            });
            console.log("¡Tarjetas renderizadas con éxito en el DOM!");
        } else {
            console.error("Error: No se encontró el contenedor con ID 'contenedor-modulos' en el HTML.");
        }
    } else {
        console.error("Error crítico: No se encontró window.modulosAnno.");
    }
});