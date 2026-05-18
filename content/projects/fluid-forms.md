---
title: "Fluid Forms"
initials: "FF"
category: "motion"
categoryLabel: "Motion Design"
year: "2025"
thumb: ""
url: ""
weight: 2
description: |
  A generative motion study using fluid simulation to drive abstract shape
  transformations. The piece evolves in real time, with each frame producing
  a unique composition of flowing geometries and color fields.
blocks:
  - type: text
    body: |
      **Approach.** Rather than keyframing shape transitions by hand, Fluid Forms
      uses a 2D Navier-Stokes solver to drive the deformation of geometric
      primitives. Velocity fields from the simulation push vertices across the
      canvas, creating organic morphing sequences that never repeat.

  - type: image
    src: ""
    label: "FF"

  - type: text
    body: |
      **Technical notes.** The simulation runs on GPU via WebGL compute shaders.
      Density, velocity, and temperature fields are resolved at 120 iterations
      per frame, then mapped to vertex displacement on a torus primitive. Colour
      palettes are sampled from the fluid temperature gradient.

  - type: text-image
    image: ""
    label: "FF"
    body: |
      Still from the final render — a single frame of the fluid-driven torus
      displacement.
    flip: false
---
