import { modulosAnno } from "../data/modulos.js";

const STORAGE_PROGRESO = "hub-repaso-3ds-progreso-v1";
const STORAGE_TEMA = "hub-repaso-3ds-tema-v1";
const root = document.documentElement;
const modulosValidos = new Set(modulosAnno.map((modulo) => modulo.nombre));
const temaGuardado = (() => {
    try {
        return localStorage.getItem(STORAGE_TEMA);
    } catch (error) {
        console.error("No se pudo leer la preferencia del tema.", error);
        return null;
    }
})();
root.dataset.theme = temaGuardado === "light" ? "light" : "dark";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-modulos");
    const campoBusqueda = document.getElementById("buscar-modulos");
    const filtroDocente = document.getElementById("filtro-docente");
    const filtroEstado = document.getElementById("filtro-estado");
    const barraProgreso = document.getElementById("barra-progreso");
    const rellenoProgreso = document.getElementById("progreso-relleno");
    const textoProgreso = document.getElementById("texto-progreso");
    const porcentajeProgreso = document.getElementById("porcentaje-progreso");
    const contadorResultados = document.getElementById("contador-resultados");
    const sinResultados = document.getElementById("sin-resultados");
    const avisoAlmacenamiento = document.getElementById("aviso-almacenamiento");
    const botonTema = document.getElementById("alternar-tema");

    if (!contenedor) return;

    const avisarAlmacenamiento = (mensaje) => {
        avisoAlmacenamiento.textContent = mensaje;
        avisoAlmacenamiento.hidden = false;
    };

    let modulosRepasados = new Set();
    try {
        const guardado = localStorage.getItem(STORAGE_PROGRESO);
        if (guardado) {
            const progreso = JSON.parse(guardado);
            if (!progreso || !Array.isArray(progreso.modulosRepasados)) {
                avisarAlmacenamiento("El progreso guardado no es válido y no pudo cargarse.");
            } else {
                modulosRepasados = new Set(
                    progreso.modulosRepasados.filter((nombre) => modulosValidos.has(nombre))
                );
            }
        }
    } catch (error) {
        console.error("No se pudo leer el progreso guardado.", error);
        avisarAlmacenamiento("No se pudo leer el progreso guardado. Podrás continuar, pero revisa la configuración de almacenamiento del navegador.");
    }

    const guardarProgreso = () => {
        try {
            localStorage.setItem(
                STORAGE_PROGRESO,
                JSON.stringify({ modulosRepasados: Array.from(modulosRepasados) })
            );
        } catch (error) {
            console.error("No se pudo guardar el progreso.", error);
            avisarAlmacenamiento("No se pudo guardar el progreso en este navegador. Los cambios actuales solo se conservarán mientras la página permanezca abierta.");
        }
    };

    const actualizarProgreso = () => {
        const total = modulosAnno.length;
        const repasados = modulosRepasados.size;
        const porcentaje = total === 0 ? 0 : Math.round((repasados / total) * 100);
        textoProgreso.textContent = `${repasados} de ${total} módulos repasados`;
        porcentajeProgreso.textContent = `${porcentaje}%`;
        barraProgreso.setAttribute("aria-valuemax", String(total));
        barraProgreso.setAttribute("aria-valuenow", String(repasados));
        barraProgreso.setAttribute("aria-valuetext", `${repasados} de ${total} módulos repasados`);
        rellenoProgreso.style.width = `${porcentaje}%`;

        contenedor.querySelectorAll(".tarjeta").forEach((tarjeta) => {
            const repasado = modulosRepasados.has(tarjeta.dataset.modulo);
            tarjeta.classList.toggle("modulo-repasado", repasado);
            tarjeta.querySelector(".estado-repaso").textContent = repasado ? "Repasado" : "";
            tarjeta.querySelector(".estado-repaso").hidden = !repasado;
            const botonRegistro = tarjeta.querySelector(".boton-registrar");
            botonRegistro.disabled = repasado;
            botonRegistro.textContent = repasado ? "Repaso registrado" : "Registrar Repaso";
        });
    };

    const marcarRepasado = (nombreModulo) => {
        if (modulosRepasados.has(nombreModulo)) return;
        modulosRepasados.add(nombreModulo);
        guardarProgreso();
        actualizarProgreso();
    };

    const normalizar = (valor) => valor
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("es");

    const llenarFiltro = (select, valores) => {
        valores.forEach((valor) => {
            const opcion = document.createElement("option");
            opcion.value = valor;
            opcion.textContent = valor;
            select.append(opcion);
        });
    };

    llenarFiltro(filtroDocente, [...new Set(modulosAnno.map((modulo) => modulo.docente))]);
    llenarFiltro(filtroEstado, [...new Set(modulosAnno.map((modulo) => modulo.estado))]);

    modulosAnno.forEach((modulo, moduloIndex) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta";
        tarjeta.dataset.modulo = modulo.nombre;
        tarjeta.dataset.docente = modulo.docente;
        tarjeta.dataset.estado = modulo.estado;
        tarjeta.style.setProperty("--color-modulo", modulo.color);

        const encabezado = document.createElement("div");
        encabezado.className = "encabezado-tarjeta";
        const titulo = document.createElement("h3");
        titulo.id = `titulo-modulo-${moduloIndex}`;
        titulo.textContent = modulo.nombre;
        const estado = document.createElement("span");
        estado.className = "badge-curso";
        estado.textContent = modulo.estado;
        encabezado.append(titulo, estado);

        const docente = document.createElement("p");
        docente.className = "docente-modulo";
        const etiquetaDocente = document.createElement("strong");
        etiquetaDocente.textContent = "Docente:";
        docente.append(etiquetaDocente, ` ${modulo.docente}`);

        const resumen = document.createElement("p");
        resumen.className = "resumen-modulo";
        resumen.textContent = modulo.resumen;

        const cajaEjercicios = document.createElement("section");
        cajaEjercicios.className = "caja-ejercicios";
        const tituloEjercicios = document.createElement("h4");
        tituloEjercicios.textContent = "Ejercicios y Tareas Clave";
        const listaEjercicios = document.createElement("ul");
        modulo.ejercicios.forEach((ejercicio) => {
            const item = document.createElement("li");
            item.textContent = ejercicio;
            listaEjercicios.append(item);
        });
        cajaEjercicios.append(tituloEjercicios, listaEjercicios);

        const herramientas = document.createElement("section");
        herramientas.className = "seccion-herramientas";
        const tituloHerramientas = document.createElement("h4");
        tituloHerramientas.textContent = "Herramientas";
        const listaHerramientas = document.createElement("div");
        listaHerramientas.className = "herramientas-wrap";

        modulo.herramientas.forEach((herramienta, herramientaIndex) => {
            const badge = document.createElement("button");
            badge.type = "button";
            badge.className = "tag-herramienta";
            badge.textContent = herramienta.nombre;
            badge.setAttribute("aria-label", `${herramienta.nombre}. ${herramienta.descripcion}`);
            badge.setAttribute("aria-expanded", "false");

            const tooltip = document.createElement("span");
            tooltip.className = "tooltip-herramienta";
            tooltip.id = `tooltip-${moduloIndex}-${herramientaIndex}`;
            tooltip.setAttribute("role", "tooltip");
            tooltip.textContent = herramienta.descripcion;
            badge.setAttribute("aria-describedby", tooltip.id);
            badge.append(tooltip);
            listaHerramientas.append(badge);
        });
        herramientas.append(tituloHerramientas, listaHerramientas);

        const acciones = document.createElement("div");
        acciones.className = "acciones-modulo";
        const estadoRepaso = document.createElement("span");
        estadoRepaso.className = "estado-repaso";
        estadoRepaso.setAttribute("aria-live", "polite");
        const botonRegistro = document.createElement("button");
        botonRegistro.type = "button";
        botonRegistro.className = "boton-registrar";
        botonRegistro.textContent = "Registrar Repaso";
        botonRegistro.setAttribute("aria-label", `Registrar repaso: ${modulo.nombre}`);
        acciones.append(estadoRepaso, botonRegistro);

        const quizToggle = document.createElement("button");
        quizToggle.type = "button";
        quizToggle.className = "boton-quiz";
        quizToggle.textContent = "Resolver Quiz";
        quizToggle.setAttribute("aria-expanded", "false");
        quizToggle.setAttribute("aria-controls", `quiz-modulo-${moduloIndex}`);
        quizToggle.setAttribute("aria-label", `Resolver quiz: ${modulo.nombre}`);

        const quizPanel = document.createElement("section");
        quizPanel.className = "panel-quiz";
        quizPanel.id = `quiz-modulo-${moduloIndex}`;
        quizPanel.setAttribute("aria-label", `Quiz del módulo: ${modulo.nombre}`);
        quizPanel.hidden = true;
        const quizTitulo = document.createElement("h4");
        quizTitulo.textContent = "Quiz del módulo";
        const preguntas = document.createElement("div");
        preguntas.className = "preguntas-quiz";
        const botonReintentar = document.createElement("button");
        botonReintentar.type = "button";
        botonReintentar.className = "boton-reintentar";
        botonReintentar.textContent = "Reintentar quiz";
        botonReintentar.setAttribute("aria-label", `Reintentar quiz: ${modulo.nombre}`);
        botonReintentar.hidden = true;

        modulo.quiz.forEach((pregunta, preguntaIndex) => {
            const bloque = document.createElement("fieldset");
            bloque.className = "pregunta-quiz";
            bloque.dataset.correcta = String(pregunta.correcta);
            bloque.dataset.explicacion = pregunta.explicacion;
            const leyenda = document.createElement("legend");
            leyenda.textContent = `${preguntaIndex + 1}. ${pregunta.pregunta}`;
            bloque.append(leyenda);

            const opciones = document.createElement("div");
            opciones.className = "opciones-quiz";
            pregunta.opciones.forEach((opcion, opcionIndex) => {
                const botonOpcion = document.createElement("button");
                botonOpcion.type = "button";
                botonOpcion.className = "opcion-quiz";
                botonOpcion.textContent = opcion;
                botonOpcion.dataset.opcion = String(opcionIndex);
                botonOpcion.setAttribute("aria-label", `Pregunta ${preguntaIndex + 1}: ${opcion}`);
                opciones.append(botonOpcion);
            });
            const feedback = document.createElement("p");
            feedback.className = "feedback-quiz";
            feedback.setAttribute("aria-live", "polite");
            feedback.hidden = true;
            bloque.append(opciones, feedback);
            preguntas.append(bloque);
        });
        quizPanel.append(quizTitulo, preguntas, botonReintentar);

        tarjeta.append(encabezado, docente, resumen, cajaEjercicios, herramientas, acciones, quizToggle, quizPanel);
        contenedor.append(tarjeta);
    });

    actualizarProgreso();

    const normalizarTooltip = (badge) => {
        const tooltip = badge.querySelector(".tooltip-herramienta");
        badge.classList.add("tooltip-visible");
        tooltip.style.left = "8px";
        tooltip.style.top = "8px";

        const badgeRect = badge.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const left = Math.max(
            8,
            Math.min(
                badgeRect.left + badgeRect.width / 2 - tooltipRect.width / 2,
                window.innerWidth - tooltipRect.width - 8
            )
        );
        const above = badgeRect.top - tooltipRect.height - 8;
        const top = above >= 8
            ? above
            : Math.min(badgeRect.bottom + 8, window.innerHeight - tooltipRect.height - 8);

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${Math.max(8, top)}px`;
    };

    const ocultarTooltip = (badge) => {
        badge.classList.remove("is-open", "tooltip-visible");
        badge.setAttribute("aria-expanded", "false");
    };

    const actualizarFiltros = () => {
        const consulta = normalizar(campoBusqueda.value.trim());
        const docenteSeleccionado = filtroDocente.value;
        const estadoSeleccionado = filtroEstado.value;
        let visibles = 0;

        contenedor.querySelectorAll(".tarjeta").forEach((tarjeta, index) => {
            const modulo = modulosAnno[index];
            const texto = normalizar([
                modulo.nombre,
                modulo.codigo || "",
                ...modulo.herramientas.map((herramienta) => herramienta.nombre)
            ].join(" "));
            const coincideTexto = !consulta || texto.includes(consulta);
            const coincideDocente = !docenteSeleccionado || modulo.docente === docenteSeleccionado;
            const coincideEstado = !estadoSeleccionado || modulo.estado === estadoSeleccionado;
            const mostrar = coincideTexto && coincideDocente && coincideEstado;
            tarjeta.hidden = !mostrar;
            if (mostrar) visibles += 1;
        });

        contadorResultados.textContent = `${visibles} de ${modulosAnno.length} módulos`;
        sinResultados.hidden = visibles !== 0;
    };

    campoBusqueda.addEventListener("input", actualizarFiltros);
    filtroDocente.addEventListener("change", actualizarFiltros);
    filtroEstado.addEventListener("change", actualizarFiltros);
    document.querySelector(".controles-filtro").addEventListener("submit", (evento) => evento.preventDefault());
    document.getElementById("limpiar-filtros").addEventListener("click", () => {
        campoBusqueda.value = "";
        filtroDocente.value = "";
        filtroEstado.value = "";
        actualizarFiltros();
        campoBusqueda.focus();
    });
    actualizarFiltros();

    botonTema.addEventListener("click", () => {
        const nuevoTema = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = nuevoTema;
        botonTema.setAttribute("aria-pressed", String(nuevoTema === "light"));
        botonTema.setAttribute("aria-label", `Cambiar al modo ${nuevoTema === "dark" ? "claro" : "oscuro"}`);
        botonTema.querySelector(".texto-tema").textContent = `Modo ${nuevoTema === "dark" ? "claro" : "oscuro"}`;
        botonTema.querySelector("[aria-hidden='true']").textContent = nuevoTema === "dark" ? "☀" : "☾";
        document.querySelector('meta[name="theme-color"]').content = nuevoTema === "dark" ? "#090c15" : "#f3f6fb";
        try {
            localStorage.setItem(STORAGE_TEMA, nuevoTema);
        } catch (error) {
            console.error("No se pudo guardar la preferencia del tema.", error);
            avisarAlmacenamiento("No se pudo guardar el tema elegido. La preferencia puede perderse al cerrar la página.");
        }
    });
    const esTemaClaro = root.dataset.theme === "light";
    botonTema.setAttribute("aria-pressed", String(esTemaClaro));
    botonTema.setAttribute("aria-label", `Cambiar al modo ${esTemaClaro ? "oscuro" : "claro"}`);
    botonTema.querySelector(".texto-tema").textContent = `Modo ${esTemaClaro ? "oscuro" : "claro"}`;
    botonTema.querySelector("[aria-hidden='true']").textContent = esTemaClaro ? "☾" : "☀";
    document.querySelector('meta[name="theme-color"]').content = esTemaClaro ? "#f3f6fb" : "#090c15";

    contenedor.addEventListener("click", (evento) => {
        const objetivo = evento.target;
        if (!(objetivo instanceof Element)) return;

        const badge = objetivo.closest(".tag-herramienta");
        if (badge) {
            const seAbre = badge.getAttribute("aria-expanded") !== "true";
            contenedor.querySelectorAll(".tag-herramienta.is-open").forEach(ocultarTooltip);
            if (seAbre) {
                badge.classList.add("is-open");
                badge.setAttribute("aria-expanded", "true");
                normalizarTooltip(badge);
            }
            return;
        }

        const botonRegistro = objetivo.closest(".boton-registrar");
        if (botonRegistro) {
            marcarRepasado(botonRegistro.closest(".tarjeta").dataset.modulo);
            return;
        }

        const toggle = objetivo.closest(".boton-quiz");
        if (toggle) {
            const panel = document.getElementById(toggle.getAttribute("aria-controls"));
            const abre = panel.hidden;
            panel.hidden = !abre;
            toggle.setAttribute("aria-expanded", String(abre));
            toggle.textContent = abre ? "Ocultar Quiz" : "Resolver Quiz";
            return;
        }

        const reintentar = objetivo.closest(".boton-reintentar");
        if (reintentar) {
            const panel = reintentar.closest(".panel-quiz");
            panel.querySelectorAll(".pregunta-quiz").forEach((pregunta) => {
                pregunta.querySelectorAll(".opcion-quiz").forEach((opcion) => {
                    opcion.disabled = false;
                    opcion.classList.remove("es-correcta", "es-incorrecta");
                });
                const feedback = pregunta.querySelector(".feedback-quiz");
                feedback.textContent = "";
                feedback.classList.remove("feedback-correcto", "feedback-incorrecto");
                feedback.hidden = true;
            });
            reintentar.hidden = true;
            return;
        }

        const opcion = objetivo.closest(".opcion-quiz");
        if (!opcion || opcion.disabled) return;
        const pregunta = opcion.closest(".pregunta-quiz");
        const panel = pregunta.closest(".panel-quiz");
        const esCorrecta = opcion.dataset.opcion === pregunta.dataset.correcta;
        const feedback = pregunta.querySelector(".feedback-quiz");

        pregunta.querySelectorAll(".opcion-quiz").forEach((boton) => {
            boton.disabled = true;
            if (boton.dataset.opcion === pregunta.dataset.correcta) {
                boton.classList.add("es-correcta");
            }
        });
        if (!esCorrecta) opcion.classList.add("es-incorrecta");

        feedback.textContent = `${esCorrecta ? "¡Correcto!" : "Incorrecto."} ${pregunta.dataset.explicacion}`;
        feedback.classList.toggle("feedback-correcto", esCorrecta);
        feedback.classList.toggle("feedback-incorrecto", !esCorrecta);
        feedback.hidden = false;
        panel.querySelector(".boton-reintentar").hidden = false;

        if (esCorrecta) marcarRepasado(panel.closest(".tarjeta").dataset.modulo);
    });

    document.addEventListener("click", (evento) => {
        if (evento.target instanceof Element && !evento.target.closest(".tag-herramienta")) {
            contenedor.querySelectorAll(".tag-herramienta.is-open").forEach(ocultarTooltip);
        }
    });

    contenedor.addEventListener("pointerover", (evento) => {
        const objetivo = evento.target;
        if (!(objetivo instanceof Element)) return;
        const badge = objetivo.closest(".tag-herramienta");
        if (badge && !badge.classList.contains("tooltip-visible")) normalizarTooltip(badge);
    });

    contenedor.addEventListener("pointerout", (evento) => {
        const objetivo = evento.target;
        if (!(objetivo instanceof Element)) return;
        const badge = objetivo.closest(".tag-herramienta");
        if (badge && !badge.classList.contains("is-open")) ocultarTooltip(badge);
    });

    contenedor.addEventListener("focusin", (evento) => {
        const objetivo = evento.target;
        if (objetivo instanceof Element) {
            const badge = objetivo.closest(".tag-herramienta");
            if (badge) normalizarTooltip(badge);
        }
    });

    contenedor.addEventListener("focusout", (evento) => {
        const objetivo = evento.target;
        if (objetivo instanceof Element) {
            const badge = objetivo.closest(".tag-herramienta");
            if (badge && !badge.classList.contains("is-open")) ocultarTooltip(badge);
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            contenedor.querySelectorAll(".tag-herramienta.is-open").forEach(ocultarTooltip);
        }
    });
});
