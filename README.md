# Invitación al Bautizo — Sofía y Amy

Descripción
- Página estática (HTML/CSS/JS) para la invitación al bautizo de Sofía y Amy.
- Diseño en tonos dorado/champagne y blanco. Incluye portada, fotos, galería (slider táctil), contador, itinerario, dirección con mapa, padrinos y audio de fondo.

Características principales
- Hero/Portada con tarjeta centrada en el pie de la imagen (nombre, fecha y hora).
- Secciones Foto 1 (Sofía) y Foto 2 (Amy) con overlay de nombre.
- Slider táctil (swipe) con tarjetas de tamaño variable y marco interior fino. Drag con mouse o dedo; cambia al soltar según desplazamiento.
- Contador en tiempo real hasta el evento (días, horas, minutos, segundos).
- Itinerario (Misa / Recepción) con iconos personalizados.
- Dirección y mapa incrustado (coordenadas: -5.090361, -81.095305).
- Sección Padrinos con tarjetas personalizadas (gradientes champagne / dorado).
- Reproductor de audio de fondo con botón de control (autoplay depende de interacción del usuario).
- Meta tags Open Graph y Twitter Card para vista previa al compartir.

Estructura de archivos
- index.html — página principal (OG meta, hero, secciones).
- css/style.css — estilos y responsive.
- js/script.js — contador, slider táctil, control de audio.
- img/ — imágenes: portada.png, sofia-main.jpg, amy-main.jpg, sofia-amy-slider1.jpg, sofia-slider2.jpg, amy-slider3.jpg, favicon.png ...
- audio/musica-fondo.mp3 — archivo de audio de fondo.
- README.md — este archivo.

Instalación y uso
1. Colocar imágenes en `img/` y el mp3 en `audio/musica-fondo.mp3`.
2. Abrir `index.html` con Live Server o servir por HTTP:
   - Desde la carpeta del proyecto (PowerShell/CMD):
     - `python -m http.server 8000`
     - Abrir `http://localhost:8000/`
3. Para ver la vista previa (Open Graph) la página debe estar publicada en un servidor accesible públicamente.

Personalización rápida
- Cambiar fecha/hora del contador: editar `target` en `js/script.js`.
- Cambiar coordenadas del mapa: editar `src` del iframe en `index.html`.
- Cambiar imagen de vista previa (Open Graph): actualizar `og:image` y `twitter:image` en `<head>` de `index.html`.
- Ajustar sensibilidad swipe: variable `swipeThreshold` en `js/script.js`.
- Control de audio: `audio` en `index.html` y comportamiento en `js/script.js`.

Git / Remoto
- Inicializar y subir al remoto:
  - git init
  - git add .
  - git commit -m "Initial commit"
  - git branch -M main
  - git remote add origin <URL-DEL-REPO>
  - git push -u origin main

Notas
- Navegadores móviles bloquean autoplay; el audio se reproducirá tras la primera interacción.
- Usa imágenes en formato horizontal y recomendable 1200x630px para `og:image`.
- Si necesitas cambios (estilos, textos, tiempo del slider), indícalo y se aplican rápidamente.

Licencia
- MIT (uso y modificación libre).
