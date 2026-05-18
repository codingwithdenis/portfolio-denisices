---
title: "Generative Landscapes"
initials: "GL"
category: "code"
categoryLabel: "Creative Coding"
year: "2024"
thumb: ""
url: ""
weight: 3
description: |
  Real-time generative landscapes built with WebGL and noise algorithms. The
  system constructs terrain, vegetation, and atmospheric effects procedurally,
  allowing viewers to explore infinite synthetic environments through their
  browser.
blocks:
  - type: text-image
    image: ""
    label: "GL"
    body: |
      In-engine screenshot of the terrain system — elevation mapped from layered
      Perlin and Worley noise.
    flip: false

  - type: text
    body: |
      **System design.** The landscape is entirely procedural: no hand-placed
      objects, no pre-baked textures. A multi-octave noise stack generates
      elevation, moisture, and temperature maps at runtime. Vegetation
      distribution follows ecological rules — conifers at high elevation,
      deciduous in valleys, sparse coverage on arid slopes.

  - type: text
    body: |
      **Interaction.** Viewers navigate with WASD + mouse, or let the autonomous
      camera tour the terrain. A day/night cycle runs in 8-minute loops, with
      atmospheric scattering shifting from golden hour to deep blue twilight.
      The entire stack runs at 60fps on consumer GPUs.

  - type: image
    src: ""
    label: "GL"
---
