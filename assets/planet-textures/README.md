# Planet surface textures

The six JPG maps are unchanged copies of `2k_earth_daymap.jpg`, `2k_jupiter.jpg`, `2k_sun.jpg`, `2k_moon.jpg`, `2k_mars.jpg`, and `2k_saturn.jpg`, mirrored from [stirlo/oursquadis.top](https://github.com/stirlo/oursquadis.top/tree/37e9ccce2d7eeaecae8893e20dd2d201fe12ab30) at commit `37e9ccce2d7eeaecae8893e20dd2d201fe12ab30`.

Original map attribution: [Solar System Scope / INOVE](https://www.solarsystemscope.com/textures/), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The source collection is based on NASA elevation and imagery data. The mirror repository's Mozilla Public License 2.0 text is retained as `LICENSE`; this does not replace the original texture attribution.

The maps are served from this site so desktop and mobile use the same materials without a third-party CDN dependency. The site renders them with spherical projection, directional lighting, color adjustments and procedural rings.

The transparent PNGs in `../planet-fallbacks/` are static renders generated with the same shader and maps. They preserve the planets' identities and silhouettes while textures load or when WebGL is unavailable.
