# HUB de Repaso 3.º DS «B»

Portal educativo de repaso integral para los módulos de 3.º DS «B» del INDEL. La versión **1.0** reúne actividades, herramientas y ejercicios interactivos en una interfaz adaptable a computadoras, tabletas y celulares.

## Características

- **Búsqueda instantánea:** encuentra módulos por título, código o nombre de herramienta; la búsqueda no distingue mayúsculas ni tildes.
- **Filtros combinables:** filtra por docente y estado del módulo, consulta la cantidad de resultados y limpia los criterios con un botón.
- **Progreso persistente:** la barra general avanza al responder correctamente una pregunta del quiz o al seleccionar **Registrar Repaso**. El progreso se conserva en `localStorage` y se restaura al volver a abrir el sitio.
- **Quizzes por módulo:** cada tarjeta tiene preguntas con retroalimentación inmediata, respuestas correctas e incorrectas destacadas y opción para reintentar.
- **Descripciones de herramientas:** los badges muestran tooltips al pasar el cursor, enfocarlos con teclado o seleccionarlos.
- **Modo claro y oscuro:** el botón de tema adapta los fondos, tarjetas, bordes y textos; la preferencia se guarda en `localStorage`.
- **Accesibilidad y diseño adaptable:** controles con etiquetas y atributos ARIA, navegación por teclado, estructura HTML semántica y estilos para pantallas pequeñas.

## Tecnologías

- HTML5
- CSS3 (variables, Grid, Flexbox y media queries)
- JavaScript ES Modules, sin dependencias de ejecución
- `localStorage` para guardar el progreso y el tema en el navegador

## Visualización local

Como el proyecto carga módulos JavaScript, ábrelo desde un servidor web local y no directamente como archivo `file://`. Desde la carpeta del proyecto, ejecuta:

```bash
python -m http.server 8000
```

Después visita <http://localhost:8000>.

## Publicación en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub, conservando `index.html` en la raíz y las carpetas `css/`, `js/` y `data/`.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama que contiene la versión 1.0 (por ejemplo, `main`) y la carpeta **/(root)**; guarda los cambios.
5. Espera a que termine la publicación y abre la URL indicada en la sección **Pages**.

El progreso y la preferencia de tema se guardan en el almacenamiento local de cada navegador, por lo que no se sincronizan entre dispositivos.
