# DVRII Frontend

Maquetacion frontend inicial del sitio DVRII usando HTML, CSS y Tailwind por CDN.

## Estructura

```text
/
|- index.html
|- pages/
|  |- convocatorias.html
|  |- convocatorias-filtros.html
|- assets/
|  |- images/
|  |  |- convocatorias/
|  |- icons/
|- css/
|  |- styles.css
|  |- base/
|  |  |- tokens.css
|  |  |- reset.css
|  |  |- responsive.css
|  |- components/
|  |  |- carousel.css
|  |  |- placeholders.css
|  |  |- section-title.css
|  |- layouts/
|  |  |- header.css
|  |  |- footer.css
|  |- pages/
|  |  |- home.css
|  |  |- convocatorias.css
|  |  |- convocatorias-filtros.css
|- js/
```

`css/styles.css` funciona como manifiesto de imports. Los estilos globales, layouts,
componentes reutilizables y estilos especificos de cada pagina viven separados para mantener el
proyecto escalable.

## Recursos pendientes

- Logos institucionales: colocar en `assets/images/`.
- Imagenes del carrusel: colocar en `assets/images/` como `carrusel-1.png`, `carrusel-2.png`
  y `carrusel-3.png`.
- Imagen del encabezado de convocatorias: colocar en `assets/images/` como
  `convocatorias-hero.png`.
- Posters de convocatorias: colocar en `assets/images/convocatorias/` cuando se integren los
  recursos finales.
- Iconos de accesos rapidos y redes sociales: colocar en `assets/icons/`.
- Cuando se integren las imagenes reales, sustituir los bloques `logo-slot`, `icon-slot`,
  `image-slot`, `slide-media` y `poster-slot` por etiquetas `img` conservando las clases de layout.

## Navegacion

Las pantallas se conectan mediante enlaces `href` para facilitar la migracion posterior a rutas de
Laravel. El carrusel de Inicio tambien usa anclas (`#slide-1`, `#slide-2`, `#slide-3`) en vez de
JavaScript.

## Nota para Laravel

La estructura actual separa vistas, estilos, scripts y assets para facilitar la migracion posterior
a `resources/views`, `public/assets`, `resources/css` y `resources/js`.
