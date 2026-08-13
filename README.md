# DVRII Frontend

Maquetacion frontend inicial del sitio DVRII usando HTML, CSS modular y Tailwind por CDN.

## Estructura

```text
/
|- index.html
|- pages/
|  |- convocatorias.html
|  |- convocatorias-filtros.html
|  |- convocatoria-detalle.html
|  |- egresados.html
|  |- empresas-organizaciones.html
|  |- empresas-organizaciones-ofertas.html
|  |- empresas-organizaciones-practicas.html
|  |- empresas-organizaciones-servicios.html
|- assets/
|  |- docs/
|  |- images/
|  |  |- convocatorias/
|  |  |- egresados/
|  |  |- empresas-organizaciones/
|  |- icons/
|- css/
|  |- app.css
|  |- base/
|  |  |- tokens.css
|  |  |- reset.css
|  |- components/
|  |  |- buttons.css
|  |  |- carousel.css
|  |  |- placeholders.css
|  |  |- poster-card.css
|  |  |- section-title.css
|  |- layouts/
|  |  |- header.css
|  |  |- footer.css
|  |- pages/
|  |  |- home.css
|  |  |- convocatorias.css
|  |  |- convocatorias-filtros.css
|  |  |- convocatoria-detalle.css
|  |  |- egresados.css
|  |  |- empresas-organizaciones.css
|- js/
|  |- tailwind-config.js
```

## CSS

`css/app.css` contiene solo estilos globales, layouts y componentes compartidos. Cada pagina carga
su propio archivo CSS despues de `app.css`.

Ejemplo:

```html
<link rel="stylesheet" href="../css/app.css">
<link rel="stylesheet" href="../css/pages/convocatorias.css">
```

Esto evita que una pagina cargue estilos de otra y prepara mejor el proyecto para una futura
migracion a Laravel.

## Recursos pendientes

- Logos institucionales: colocar en `assets/images/`.
- Imagenes del carrusel: colocar en `assets/images/` como `carrusel-1.png`, `carrusel-2.png`
  y `carrusel-3.png`.
- Imagen del encabezado de convocatorias: colocar en `assets/images/` como
  `convocatorias-hero.png`.
- Imagen del encabezado de egresados: colocar en `assets/images/egresados/` como `hero.png`.
- Imagen del encabezado de empresas y organizaciones: colocar en
  `assets/images/empresas-organizaciones/` como `hero.png`.
- Posters de convocatorias: colocar en `assets/images/convocatorias/` cuando se integren los
  recursos finales.
- PDFs de convocatorias: colocar en `assets/docs/`.
- Iconos de accesos rapidos y redes sociales: colocar en `assets/icons/`.

## Navegacion

Las pantallas se conectan mediante enlaces `href` para facilitar la migracion posterior a rutas de
Laravel. El carrusel de Inicio usa anclas (`#slide-1`, `#slide-2`, `#slide-3`) en vez de
JavaScript.

## Nota para Laravel

La estructura actual separa vistas, estilos, scripts y assets para facilitar la migracion posterior
a `resources/views`, `public/assets`, `resources/css` y `resources/js`.
