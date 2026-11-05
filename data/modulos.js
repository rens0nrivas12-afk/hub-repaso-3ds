export const modulosAnno = [
    // --- MÓDULOS DE PROF. ARCIDES CANALES ---
    {
        nombre: "BTVDS 3.1: Desarrollo de Aplicaciones para la Solución de Problemas",
        docente: "Prof. Arcides Canales",
        estado: "En curso",
        resumen: "Programación orientada a objetos, acceso a datos y ASP.NET Razor.",
        color: "#38bdf8",
        herramientas: [
            { nombre: "C#", descripcion: "Lenguaje usado para implementar la lógica orientada a objetos y las aplicaciones del módulo." },
            { nombre: "ASP.NET Razor", descripcion: "Tecnología de ASP.NET para crear páginas web dinámicas conectadas con la lógica de la aplicación." },
            { nombre: "POO", descripcion: "Paradigma que organiza el programa en objetos y clases; se practica con herencia y polimorfismo." },
            { nombre: "SQL", descripcion: "Lenguaje para consultar y modificar los datos almacenados en las bases de datos del proyecto." }
        ],
        quiz: [
            {
                pregunta: "¿Qué permite la herencia en programación orientada a objetos?",
                opciones: ["Reutilizar y extender miembros de otra clase", "Convertir una tabla en una página web", "Eliminar la necesidad de métodos"],
                correcta: 0,
                explicacion: "Una clase derivada puede reutilizar y ampliar el comportamiento de su clase base."
            },
            {
                pregunta: "¿Para qué se usa SQL en el acceso a datos?",
                opciones: ["Diseñar estilos visuales", "Consultar y modificar datos en una base de datos", "Compilar el código C#"],
                correcta: 1,
                explicacion: "SQL permite consultar y modificar la información almacenada en una base de datos."
            }
        ],
        ejercicios: [
            "Práctica 1 y 2: POO Introducción, Herencia y Polimorfismo",
            "Práctica 3 \"A\" Acceso a datos",
            "Práctica 04 Creación de base de datos y conexión",
            "Práctica 05 Code First - ASP Razor"
        ]
    },
    {
        nombre: "Módulo 3.3: Administración de Bases de Datos",
        docente: "Prof. Arcides Canales",
        estado: "Completado",
        resumen: "Consultas SQL avanzadas, dashboards y Power BI.",
        color: "#34d399",
        herramientas: [
            { nombre: "SQL", descripcion: "Lenguaje de consultas utilizado para filtrar, relacionar y administrar registros." },
            { nombre: "MySQL", descripcion: "Sistema gestor de bases de datos relacionales usado para almacenar y consultar información." },
            { nombre: "SQLite", descripcion: "Base de datos relacional ligera utilizada en prácticas y aplicaciones locales." },
            { nombre: "Power BI", descripcion: "Herramienta para analizar datos y construir informes y dashboards interactivos." },
            { nombre: "Excel", descripcion: "Hoja de cálculo empleada para organizar datos y crear análisis o dashboards." }
        ],
        quiz: [
            {
                pregunta: "¿Qué cláusula SQL permite filtrar filas según una condición?",
                opciones: ["WHERE", "ORDER BY", "CREATE"],
                correcta: 0,
                explicacion: "WHERE limita los resultados a las filas que cumplen la condición."
            },
            {
                pregunta: "¿Cuál es el objetivo de un dashboard en Power BI?",
                opciones: ["Mostrar indicadores y datos visualmente", "Crear clases de programación", "Administrar versiones del código"],
                correcta: 0,
                explicacion: "Un dashboard reúne visualizaciones e indicadores para facilitar el análisis."
            }
        ],
        ejercicios: [
            "Prácticas SQL (Día 1, Día 2, Día 3 y Semana 4 con Access)",
            "Consultas de BD (Semana 2 Query BD)",
            "Actividades de Power BI y creación de Dashboards en Excel",
            "Ejecución final y actividades remediales"
        ]
    },
    {
        nombre: "Módulo 3.2: Mantenimiento y Aseguramiento de Sistemas",
        docente: "Prof. Arcides Canales",
        estado: "Completado",
        resumen: "SLA, planes de contingencia y modelado UML.",
        color: "#c084fc",
        herramientas: [
            { nombre: "Plantillas SLA", descripcion: "Formatos para definir acuerdos de nivel de servicio, responsabilidades y tiempos de respuesta." },
            { nombre: "UML", descripcion: "Lenguaje de modelado visual usado para representar sistemas, procesos y sus relaciones." },
            { nombre: "Monitoreo", descripcion: "Seguimiento del estado de sistemas y servicios para detectar incidencias y planificar mantenimiento." }
        ],
        quiz: [
            {
                pregunta: "¿Qué describe un SLA?",
                opciones: ["Los niveles de servicio y compromisos acordados", "La estructura de una clase en C#", "El diseño de una base de datos"],
                correcta: 0,
                explicacion: "Un SLA define compromisos medibles sobre la prestación y atención de un servicio."
            },
            {
                pregunta: "¿Para qué se utiliza UML en el módulo?",
                opciones: ["Para modelar visualmente un sistema", "Para ejecutar consultas SQL", "Para monitorear el hardware"],
                correcta: 0,
                explicacion: "UML permite comunicar la estructura o el comportamiento de un sistema mediante diagramas."
            }
        ],
        ejercicios: [
            "Modelado de software UML",
            "Plantilla y aplicación de SLA",
            "Semana 3: Monitoreo y registro de mantenimiento",
            "Semana 6: Ejecución y planes de contingencia"
        ]
    },

    // --- MÓDULOS DE PROF. JAVIER MINEROS ---
    {
        nombre: "Módulo 3.8: Proyecto Innovador de Desarrollo de Software",
        docente: "Prof. Javier Mineros",
        estado: "En curso",
        resumen: "Aplicaciones multiplataforma y sistemas ERP con Python y Odoo.",
        color: "#f472b6",
        herramientas: [
            { nombre: "Python", descripcion: "Lenguaje utilizado para crear aplicaciones y explorar soluciones para el proyecto." },
            { nombre: "Avalonia UI", descripcion: "Framework multiplataforma de interfaz de usuario para aplicaciones .NET." },
            { nombre: "Flet", descripcion: "Framework para construir interfaces y aplicaciones con Python." },
            { nombre: "Odoo", descripcion: "Plataforma ERP que integra procesos empresariales y puede ampliarse con módulos." },
            { nombre: "Git", descripcion: "Sistema de control de versiones para registrar cambios y colaborar en el proyecto." }
        ],
        quiz: [
            {
                pregunta: "¿Qué tipo de solución es Odoo?",
                opciones: ["Un sistema ERP modular", "Un lenguaje de marcado para páginas", "Un gestor de versiones"],
                correcta: 0,
                explicacion: "Odoo es una plataforma ERP que reúne aplicaciones para distintos procesos empresariales."
            },
            {
                pregunta: "¿Para qué sirve Git en un proyecto de software?",
                opciones: ["Controlar el historial de cambios del código", "Crear dashboards de datos", "Diseñar diagramas UML automáticamente"],
                correcta: 0,
                explicacion: "Git registra versiones del código y facilita el trabajo colaborativo."
            }
        ],
        ejercicios: [
            "Guía Python Individual y apps con Python",
            "Primer contacto con Avalonia UI y Flet",
            "Odoo como sistema ERP",
            "Avances de proyecto integrador (10% y 15%)"
        ]
    },
    {
        nombre: "Módulo 3.4: Elaboración de Documentación de Sistemas",
        docente: "Prof. Javier Mineros",
        estado: "Completado",
        resumen: "Arquitectura y manuales técnicos del software.",
        color: "#fbbf24",
        herramientas: [
            { nombre: "UML", descripcion: "Lenguaje visual para comunicar la estructura y el comportamiento de la arquitectura del software." },
            { nombre: "Documentación", descripcion: "Información técnica y funcional que explica cómo está diseñado, instalado y utilizado el sistema." },
            { nombre: "Diagramas", descripcion: "Representaciones visuales de arquitectura, procesos o componentes para apoyar el análisis y los manuales." }
        ],
        quiz: [
            {
                pregunta: "¿Qué aporta un diagrama UML a la documentación de un sistema?",
                opciones: ["Representa visualmente su estructura o comportamiento", "Reemplaza todas las pruebas", "Guarda copias de seguridad del código"],
                correcta: 0,
                explicacion: "Los diagramas UML ayudan a comunicar de forma visual cómo se estructura o comporta un sistema."
            },
            {
                pregunta: "¿Qué debe facilitar un manual técnico?",
                opciones: ["Comprender y mantener el sistema", "Cambiar automáticamente el lenguaje del sistema", "Evitar documentar la arquitectura"],
                correcta: 0,
                explicacion: "La documentación técnica permite entender la solución y apoyar su instalación y mantenimiento."
            }
        ],
        ejercicios: [
            "Fase 1 a Fase 4: Desarrollo y arquitectura del software",
            "Fase 5 y documentos finales del sistema",
            "Fases 6 y 7 de pruebas y entrega",
            "Manual de sistema y ejercicio final"
        ]
    },

    // --- OTROS MÓDULOS INSTITUCIONALES / INDEL ---
    {
        nombre: "Módulo 2: Desarrollo de Componentes para Dispositivos Móviles",
        docente: "INDEL",
        estado: "Completado",
        resumen: "Creación de interfaces y componentes para aplicaciones móviles.",
        color: "#ff7849",
        herramientas: [
            { nombre: ".NET MAUI", descripcion: "Framework .NET para crear aplicaciones nativas dirigidas a varias plataformas desde un proyecto compartido." },
            { nombre: "C#", descripcion: "Lenguaje usado para implementar la lógica y el comportamiento de la aplicación móvil." },
            { nombre: "XAML", descripcion: "Lenguaje declarativo utilizado para describir interfaces y componentes de la aplicación." }
        ],
        quiz: [
            {
                pregunta: "¿Qué permite crear .NET MAUI?",
                opciones: ["Aplicaciones nativas multiplataforma", "Solo consultas para bases de datos", "Diagramas de arquitectura"],
                correcta: 0,
                explicacion: ".NET MAUI permite desarrollar aplicaciones nativas para varias plataformas con una base de código compartida."
            },
            {
                pregunta: "¿Para qué se utiliza XAML en una aplicación MAUI?",
                opciones: ["Describir la interfaz de usuario", "Guardar el historial de Git", "Ejecutar consultas SQL"],
                correcta: 0,
                explicacion: "XAML declara la estructura visual y los componentes de la interfaz."
            }
        ],
        ejercicios: [
            "Práctica 06 y Práctica 7 Net Maui",
            "Práctica 8 y 9 Net Maui",
            "Autoevaluación Práctica 9"
        ]
    },
    {
        nombre: "Módulo 3: Conversación de Inglés sobre Mantenimiento",
        docente: "INDEL",
        estado: "En curso",
        resumen: "Términos técnicos, metodologías ágiles y bases de datos en inglés.",
        color: "#2dd4bf",
        herramientas: [
            { nombre: "Scrum", descripcion: "Marco de trabajo ágil que organiza el desarrollo en ciclos y promueve la colaboración del equipo." },
            { nombre: "CRUD", descripcion: "Operaciones básicas de datos: crear, leer, actualizar y eliminar registros." },
            { nombre: "IA", descripcion: "Inteligencia artificial: técnicas y sistemas que realizan tareas como analizar información o generar respuestas." }
        ],
        quiz: [
            {
                pregunta: "¿Qué significan las operaciones CRUD?",
                opciones: ["Crear, leer, actualizar y eliminar", "Consultar, reportar, analizar y diseñar", "Compilar, reusar, automatizar y depurar"],
                correcta: 0,
                explicacion: "CRUD corresponde a Create, Read, Update y Delete: las operaciones básicas sobre registros."
            },
            {
                pregunta: "¿Cómo organiza Scrum el trabajo de un equipo?",
                opciones: ["En iteraciones con objetivos y revisión", "En una única entrega sin seguimiento", "Solo mediante consultas a una base de datos"],
                correcta: 0,
                explicacion: "Scrum utiliza iteraciones y revisiones periódicas para inspeccionar el avance y adaptarse."
            }
        ],
        ejercicios: [
            "Práctica 10 Scrum",
            "Práctica 11 - Base de datos CRUD-IA"
        ]
    },
    {
        nombre: "Módulo 4: Puesta en Marcha de la Empresa en Asociatividad Cooperativa",
        docente: "INDEL",
        estado: "Completado",
        resumen: "Proyectos de desarrollo empresarial, Winform, ASPX y Arduino.",
        color: "#fb7185",
        herramientas: [
            { nombre: "Winform", descripcion: "Tecnología de .NET para crear aplicaciones de escritorio con interfaz gráfica para Windows." },
            { nombre: "ASPX", descripcion: "Formato de páginas de ASP.NET utilizado para construir aplicaciones web." },
            { nombre: "Arduino", descripcion: "Plataforma de hardware y software para prototipos y proyectos electrónicos interactivos." },
            { nombre: "Prestashop", descripcion: "Plataforma de comercio electrónico para crear y administrar tiendas en línea." },
            { nombre: ".NET MAUI", descripcion: "Framework .NET para desarrollar aplicaciones nativas multiplataforma desde un proyecto compartido." }
        ],
        quiz: [
            {
                pregunta: "¿Para qué se usa Prestashop en el proyecto?",
                opciones: ["Crear y administrar una tienda en línea", "Diseñar circuitos físicos", "Modelar clases UML"],
                correcta: 0,
                explicacion: "Prestashop es una plataforma de comercio electrónico para gestionar tiendas en línea."
            },
            {
                pregunta: "¿Qué aporta Arduino a un proyecto?",
                opciones: ["Control e interacción con componentes electrónicos", "Administración de páginas ASPX", "Gestión de versiones"],
                correcta: 0,
                explicacion: "Arduino permite crear prototipos que interactúan con sensores y otros componentes electrónicos."
            }
        ],
        ejercicios: [
            "Prestashop (Individual) 25% del módulo",
            "Proyecto Final .net maui 25%",
            "Proyecto Winform y aspx 25%",
            "Proyecto Augustine-Arduino 25%"
        ]
    },
    {
        nombre: "Módulo 3.0: Orientación al Proceso Educativo",
        docente: "INDEL",
        estado: "Completado",
        resumen: "Lineamientos iniciales y organización de equipos.",
        color: "#a78bfa",
        herramientas: [
            { nombre: "Portafolio", descripcion: "Recopilación organizada de evidencias, actividades y avances de aprendizaje del módulo." },
            { nombre: "Lineamientos", descripcion: "Indicaciones y criterios que orientan la organización y el trabajo durante el módulo." },
            { nombre: "Equipos", descripcion: "Grupos de trabajo organizados para colaborar y desarrollar las actividades del módulo." }
        ],
        quiz: [
            {
                pregunta: "¿Qué reúne el portafolio del módulo?",
                opciones: ["Evidencias y avances de aprendizaje", "Solo las calificaciones de otros módulos", "El código fuente de una base de datos"],
                correcta: 0,
                explicacion: "El portafolio organiza actividades y evidencias del proceso de aprendizaje."
            },
            {
                pregunta: "¿Qué favorece la organización en equipos de trabajo?",
                opciones: ["La colaboración y el desarrollo conjunto de actividades", "La eliminación de los lineamientos", "La ejecución automática de proyectos"],
                correcta: 0,
                explicacion: "Los equipos facilitan la colaboración y la responsabilidad compartida en las actividades."
            }
        ],
        ejercicios: [
            "Creación de equipos de trabajo",
            "Espacio para compartir códigos QR",
            "Portafolio del Módulo 3.0"
        ]
    }
];