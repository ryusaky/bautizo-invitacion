# Invitación al Bautizo — Sofía y Amy

Descripción
- Página estática de invitación para el bautizo de Sofía y Amy.
- Contiene: portada con texto superpuesto, galería (slider con swipe), fotos centradas, contador hasta el evento, itinerario (misa y recepción) con iconos, dirección, mapa incrustado, sección de padrinos, y audio de fondo.

Características principales
- Hero/Portada con texto superpuesto (título, nombres, fecha y hora).
- Fotos centradas (Foto 1 / Foto 2).
- Contador en tiempo real (días, horas, minutos, segundos).
- Itinerario con iconos (iglesia y fiesta).
- Dirección con botón para Google Maps.
- Mapa incrustado (coordenadas: -5.090361, -81.095305).
- Slider táctil: arrastra con el dedo o mouse para cambiar imágenes (no auto-play).
- Tarjetas de padrinos personalizadas (estilos dorado/champagne).
- Audio de fondo: reproduce un MP3 alojado en el proyecto (autoplay puede ser bloqueado por el navegador).

Estructura de archivos
- index.html — archivo principal.
- css/style.css — estilos.
- js/script.js — lógica (contador, slider, audio).
- img/ — imágenes usadas (portada.png, sofia-main.jpg, amy-main.jpg, sofia-amy-slider1.jpg, sofia-slider2.jpg, amy-slider3.jpg, etc.).
- audio/musica-fondo.mp3 — audio de fondo.
- README.md — este archivo.

Instalación y uso
1. Coloca las imágenes en la carpeta `img/` y el mp3 en `audio/musica-fondo.mp3`.
2. Abrir `index.html` en el navegador: doble clic o desde VS Code Live Server.
   - Recomendado servir por HTTP para que el iframe de Google Maps funcione correctamente:
     - Windows / Python: abre terminal en la carpeta del proyecto y ejecuta:
       - `python -m http.server 8000`
     - Luego abre: `http://localhost:8000/`
3. Si el audio no se reproduce automáticamente, haz clic en la página para permitir reproducción.

Ajustes comunes
- Cambiar fecha/hora del contador: editar `target` en `js/script.js`.
- Cambiar coordenadas del mapa: editar el `src` del iframe en `index.html`.
- Ajustar sensibilidad del swipe: variable `swipeThreshold` en `js/script.js`.
- Imágenes del slider sin recortes: `object-fit: contain` en `.slide` (css/style.css).

Compatibilidad
- Diseñado responsive para móviles y escritorio.
- Navegadores recomendados: Chrome, Edge, Firefox (últimas versiones).

Licencia
- MIT — usar y modificar libremente, menciona autor si lo deseas.

Contactar / Créditos
- Proyecto personal de invitación (local). Si necesitas que ajuste estilos, animaciones o comportamiento del slider, modifica `css/style.css` y `js/script.js`, o solicita cambios.
