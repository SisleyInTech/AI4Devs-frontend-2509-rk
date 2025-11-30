# Prompts Utilizados - Versión 1

## Herramienta Usada
**Cursor AI - Claude Sonnet 4.5**

---

## Prompts

### Prompt 1: Análisis del Proyecto e Implementación Incremental

```
Quiero que actúes como un desarrollador frontend senior experto en React, y en sistemas ATS.

Antes de proponer cualquier cambio, **debes entender el proyecto actual**: @frontend 

* Analiza primero cómo funciona el frontend actual, especialmente la vista `positions`.

* Revisa cómo está estructurado `positions` y **utiliza exactamente el mismo patrón y estilo para las nuevas solicitudes**.

* Para las nuevas solicitudes solo adapta lo que ya existe siguiendo el mismo patrón y estilo del proyecto.

## Ejercicio

Queremos que al hacer clic en el botón "Ver proceso" de cualquiera de las posiciones, nos lleve a la vista de detalle de cada posición, denominada "position".

Tu misión en este ejercicio es crear la interfaz "position", una página en la que poder visualizar y gestionar los diferentes candidatos de una posición específica.

Se ha decidido que la interfaz sea tipo kanban, mostrando los candidatos como tarjetas en diferentes columnas que representan las fases del proceso de contratación, y pudiendo actualizar la fase en la que se encuentra un candidato solo arrastrando su tarjeta. Aquí tienes un ejemplo de interfaz posible: 

Algunos de los requerimientos del equipo de diseño que se pueden ver en el ejemplo son:

Se debe mostrar el título de la posición en la parte superior, para dar contexto

Añadir una flecha a la izquierda del título que permita volver al listado de posiciones

Deben mostrarse tantas columnas como fases haya en el proceso

La tarjeta de cada candidato/a debe situarse en la fase correspondiente, y debe mostrar su nombre completo y su puntuación media

Si es posible, debe mostrarse adecuadamente en móvil (las fases en vertical ocupando todo el ancho)

Algunas observaciones:

Asume que la página de posiciones la encuentras 

Asume que existe la estructura global de la página, la cual incluye los elementos comunes como menú superior y footer. Lo que estás creando es el contenido interno de la página.

## Indicaciones

Quiero ir ejecutando una primera versión de la página "position" por etapas, para ir viendo cómo va funcionando el proyecto, una por una, y en cada una se debe entregar algo que se pueda ver funcionando, con datos mockeados.

Para la segunda versión haremos la conexión a diversos endpoints de la API para obtener los datos reales y actualizar la fase en la que se encuentra un candidato solo arrastrando su tarjeta. Esta segunda versión la realizaremos luego de haber implementado todas las etapas de la primera versión, cuando compruebe que todo funciona correctamente y luego que me aclares si el estado actual del proyecto tiene lo necesario para esto. Haz un análisis y dame un informe. 

## Plan de acción versión 1

Las etapas que quiero implementar en esta primera versión de la página "position" (una por vez) son:

**Etapa 1 – Encabezado de la posición**

* Mostrar el *título de la posición* en la parte superior.

* Añadir una *flecha a la izquierda del título* que permita volver al listado de posiciones.

**Etapa 2 – Columnas del proceso**

* Mostrar tantas columnas como fases existan en el proceso de reclutamiento.

**Etapa 3 – Tarjetas de candidatos**

* La tarjeta de cada candidato debe ubicarse en su fase correspondiente.

* Debe mostrar: nombre completo y puntuación media.

## Modo de trabajo obligatorio

### **1. Análisis antes de actuar**

Antes de generar cualquier código o propuesta de acción:

* Analiza y explica cómo funciona hoy la vista `positions`.

* Describe qué archivos participan y cómo se relacionan.

### **2. Una sola tarea por fase**

Cada fase deberá entregarse como:

* Una única tarea, clara y bien explicada.

* Con los archivos exactos a modificar o crear siguiendo el mismo patrón que `positions`.

* Teniendo en cuenta que la propuesta debe estar alineada con el proyecto actual y el estilo del proyecto.

* Teniendo en cuenta que la propuesta debe ser funcional y que debe ser posible verla funcionando y ser responsive.

### **3. Documentación**

Al finalizar cada fase, debes indicar:

* Qué agregar o actualizar en `README.md` o `frontend/docs/`.

* Si es apropiado, crear/actualizar un archivo como `frontend/docs/ManifestoBuenasPracticas.md`, pero **solo si es coherente con el proyecto actual**.

### **5. Restricciones absolutas**

* Solo modificar el frontend, no el backend.

* No crear componentes nuevos que no sean necesarios.

* No cambiar la arquitectura del proyecto.

## **Objetivo final**

Implementar las etapas del pipeline de reclutamiento de forma incremental, funcional, sin romper ni modificar la estructura natural del proyecto.
```

---

### Prompt 2: Inicio de Implementación

```
Sí por favor, implementa la Etapa 1
```

---

### Prompt 3: Continuación con Estilos Coherentes

```
Vamos a la etapa 2, ten en cuenta aplicar estilos siendo consecuentes con los que ya existen en el proyecto.
```

---

### Prompt 4: Implementación de Tarjetas

```
Ejecuta la etapa 3
```

---

### Prompt 5: Ajustes de Diseño Según Especificaciones Figma

```
Te voy a colocar unas especificaciones tipo Figma para ajustar el diseño de la interfaz, recuerda garantizar un diseño completamente responsive:

Especificación tipo Figma – Vista Position (Pipeline de Reclutamiento)

1. Layout general

Frame principal

Width: 100%

Background: #D3D3D8 (gris claro, según tu imagen)

Padding top: 48px

Padding horizontal: 40px

Layout direction: Vertical

Gap: 32px

2. Encabezado

Title Container

Position: Top-centered

Layout: Horizontal (flecha + título)

Alignment: Center vertically

Gap: 12px

Back Arrow

Icon: Chevron-left / Arrow-left

Size: 24×24

Color: Follow design system (probablemente gris oscuro o negro)

Interaction: Navigate back to Positions list

Position Title

Text: Nombre de la posición (ej. "Senior Backend Engineer Position")

Font size: 32px

Font weight: Bold

Line height: ~120%

Color: #000000

Alignment: Center

3. Pipeline Container

Layout: Horizontal

Alignment: Top-left

Gap: 32px

Behavior:

Desktop → todas las columnas visibles en una fila

Tablet → columnas reducen ancho proporcional

Mobile → scroll horizontal o stack vertical

Max width: 100% of screen

4. Columnas de fase

Column container

Width: ~260–300px

Min-height: Auto

Background: #F0F0F3

Border radius: 12–16px

Padding: 20px

Layout: Vertical

Gap: 16px

Column Title

Font size: 18px

Font weight: 600

Color: #000000

Margin bottom: 12px

Column spacing

Distance between columns: 32px

5. Tarjetas de candidatos

Card Container

Background: #FFFFFF

Border radius: 12px

Padding: 16px

Shadow: Soft, subtle (2–4px blur)

Layout: Vertical

Gap: 8px

Width: 100%

Candidate Name

Font size: 16px

Font weight: 500

Color: #000000

Rating (puntuación media)

Display: Row of circles

Circle size: 14–16px

Circle color: Green (#26A828 aprox)

Number of circles: 1–5 depending on score

Gap between circles: 6px

6. Responsividad

Desktop (≥1024px)

4 columnas visibles

Cada columna mantiene su ancho fijo

Cards con padding estándar

Tablet (≥768px y <1024px)

Columnas reducen ancho a ~220px

Puede aparecer scroll horizontal si no hay espacio

Cards se mantienen igual

Mobile (<768px)

Pipeline con scroll horizontal obligatorio

Columnas apiladas horizontalmente

Cards mantienen tamaño proporcional

Título centrado con flecha alineada correctamente

7. Comportamientos

Las tarjetas no se mueven (no es drag & drop).

Los datos provienen de mock data.

Las fases y candidatos deben renderizarse desde datos externos, no hardcodeados.

No se muestran botones adicionales.

8. Tono visual general

Minimalista

Soft edges (bordes suavizados)

Colores suaves, sin saturación

Profundidad leve con sombras suaves en tarjetas

Estructura modular limpia
```

---

### Prompt 6: Documentación de Prompts

```
Recolecta todos mis prompts y colócalos en @prompts-sjm.md. 

- Deben colocarse en orden cronológico con un formato adecuado.

- Conservar texto tal cual, corrigiendo errores ortográficos.

- Contenido del documento:

   * Título

   * Herramienta usada

   * Sección: "Prompts utilizados"
```

---
---

# Prompts de Apoyo - Versión 1

## Herramienta Usada
**ChatGPT**

### Prompt 1:
```
Quiero que generes un diseño de interfaz con estilo similar a Figma para una pantalla que mostraré a continuación. 
El objetivo es obtener una guía visual clara que pueda usarse como base para implementar la interfaz.
```