# DVRII Frontend

Maquetación frontend inicial del sitio DVRII usando HTML, CSS y Tailwind por CDN.

## Estructura

```text
/
├─ index.html
├─ pages/
├─ assets/
│  ├─ images/
│  └─ icons/
├─ css/
│  └─ styles.css
└─ js/
```

## Recursos pendientes

- Logos institucionales: colocar en `assets/images/`.
- Imágenes del carrusel: colocar en `assets/images/` como `carrusel-1.png`, `carrusel-2.png`
  y `carrusel-3.png`.
- Iconos de accesos rápidos y redes sociales: colocar en `assets/icons/`.
- Cuando se integren las imágenes reales, sustituir los bloques `logo-slot`, `icon-slot`,
  `image-slot` y `slide-media` por etiquetas `img` conservando las clases de layout.

## Nota para Laravel

La estructura actual separa vistas, estilos, scripts y assets para facilitar la migración posterior
a `resources/views`, `public/assets`, `resources/css` y `resources/js`.
