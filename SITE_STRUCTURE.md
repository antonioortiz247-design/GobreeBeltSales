# Gobree Belt site structure

To reduce merge conflicts and GitHub Pages detection issues, the website is intentionally duplicated in two locations:

- **Root (deployment-first):**
  - `index.html`, `nosotros.html`, `productos.html`, `sectores.html`, `servicios.html`, `blog.html`, `contacto.html`
  - `css/styles.css`, `js/script.js`, `img/*.svg`
- **Mirror copy (legacy path):** `gobree-belt-website/`

If one path causes merge conflicts in GitHub, use the other as fallback reference.
