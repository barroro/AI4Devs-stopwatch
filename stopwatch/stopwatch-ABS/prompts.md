**Prompt y código generado con Chat GPT-4o**

# PRIMER PROMPT GENERADO
Necesito generar un prompt para crear una aplicación de cronómetro. Puntos importantes a tener en cuenta:
- Tiene que tener un archivo index.html y un archivo script.js.
- Tailwind para los estilos
- Un título arriba con el contenido "Stopwatch using AI"
- A continuación, un input donde se muestra el tiempo transcurrido. El tiempo se muestra así "00:00:00"
- Dentro del mismo input, en la esquina de abajo-derecha, se mostrará los milisegundos con un texto muy pequeño.
- Después del input, tendremos dos botones alineados con distintos colores. El primer botón será el de "Start" y luego alineado a su derecha estará el de "Clear"
    - Start: Empezará el tiempo a incrementarse y se verá reflejado en el input. Cuando se haga click en start, el mismo botón se reemplazará el texto y pondrá "Pause". Cuando el botón sea "Pause", permitirá pausar el tiempo y reemplazará el valor de "Pausar" por "Continue". Si se le da click a "Continue", vuelve a seguir el tiempo desde donde se había quedado y se muestra de nuevo el botón de "Pause".
    - Clear: Cuando se haga click, se resetea el tiempo y vuelve al estado inicial. El botón de la izquierda tiene que poner "Start" y el tiempo tiene que estar a 0.

Antes de empezar a generar el prompt, tienes alguna pregunta o duda para empezar?

**Importante** El prompt tiene que ser claro, preciso y usando Markdown. Adjunto una imagen con el diseño del cronómetro. Quiero que sea parecido pero con un diseño más moderno y colores pastel.
**IMAGEN ADJUNTA DEL DISEÑO (IMAGE.PNG)**

# PASOS ANTES DE OBTENER EL PROMPT FINAL
- Le he pedido pulir estilos que quería cambiar
- Y que usase la última versión de Tailwind


# **PROMPT FINAL** GENERADO CON CHAT GPT BASADO EN LAS INSTRUCCIONES ANTERIORES

Crea una aplicación de cronómetro utilizando **HTML**, **JavaScript** y **TailwindCSS** (última versión). La aplicación debe cumplir con los siguientes requerimientos:

### 1. Estructura de archivos:
- Un archivo `index.html` para la interfaz de usuario.
- Un archivo `script.js` para la lógica del cronómetro.
- Usa **TailwindCSS** en su última versión para los estilos.

### 2. Interfaz de usuario y funcionalidad:
- **Título**: La aplicación debe mostrar el título "Stopwatch using AI" en la parte superior.
- **Input de cronómetro:** Un input de tipo texto que mostrará el tiempo transcurrido con el formato `00:00:00` (horas, minutos, segundos) y los milisegundos en la esquina inferior derecha del input con un tamaño más pequeño y sutil.
- **Botones:**
    - Debajo del input, se deben mostrar dos botones alineados horizontalmente:
        1) Botón izquierdo:
        - Inicia el cronómetro con el texto **"Start"**.
        - Al hacer clic en **"Start"**, el cronómetro comenzará y el texto del botón cambiará a **"Pause"**, con un color diferente.
        - Al hacer clic en **"Pause"**, el cronómetro se detendrá y el botón cambiará a **"Continue"**, permitiendo que el cronómetro se reanude desde donde se detuvo.
        - Al hacer clic en **"Continue"**, el cronómetro se reanuda y el botón vuelve a cambiar a **"Pause"**.

        2) Botón derecho:
        - Botón de **"Clear"** que reinicia el cronómetro, reseteando el tiempo a "00:00:00" y los milisegundos a cero. El botón izquierdo también vuelve a mostrar "Start".

### 3. Estilos con TailwindCSS (última versión):
- El diseño debe ser minimalista y moderno:
    - **Sin color de fondo**, utilizando blanco como color base.
    - El **input** donde se muestra el tiempo debe tener:
    - Fondo blanco, **sin sombras**.
    - Bordes redondeados y un diseño limpio.
    - El texto debe ser grande y centrado, con una fuente legible y clara.
    - Los **milisegundos** se deben mostrar en la esquina inferior derecha del input, en tamaño más pequeño y con un color más tenue.
- **Botones:**
    - Los botones deben ser más grandes, con espacio extra de padding y un tamaño de texto grande.
    - **Colores de los botones:**
        - El botón de **Start** y **Continue** debe tener el color **bg-cyan-700** y cambiar a **bg-cyan-600** cuando se haga hover.
        - El botón de **Pause** debe tener el color **bg-emerald-600** y cambiar a **bg-emerald-500** cuando se haga hover.
        - El botón de **Clear** debe tener un color rojo pastel: **bg-red-300** y cambiar a **bg-red-400** en hover.

### 4. Lógica del cronómetro:
- El cronómetro debe iniciar en "00:00:00" (tiempo cero).
- Al hacer clic en "Start", el cronómetro debe empezar a contar el tiempo en horas, minutos, segundos y milisegundos.
- Al hacer clic en "Pause", el tiempo debe detenerse y el botón debe cambiar su texto a "Continue".
- Al hacer clic en "Continue", el cronómetro debe continuar desde donde se dejó, y el botón debe cambiar nuevamente a "Pause".
- Al hacer clic en "Clear", el cronómetro debe volver a su estado inicial y el botón de la izquierda debe mostrar "Start".