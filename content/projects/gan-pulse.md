---
title: "GAN Pulse"
initials: "GP"
category: "ia"
categoryLabel: "IA"
year: "2024"
thumb: ""
url: ""
weight: 8
description: |
  A real-time generative adversarial network that produces an endless stream of
  synthetic portrait photographs. No two faces are the same — each frame is a
  novel identity generated from random noise, challenging our assumptions about
  authenticity and representation.
blocks:
  - type: text
    body: |
      **Premise.** What does it mean to look at a face that has never existed?
      GAN Pulse streams a continuous feed of AI-generated portraits at 24fps,
      each one unique. The piece runs on a latent-space random walk, ensuring
      smooth morphological transitions between subjects — a face ages, changes
      gender, shifts ethnicity, and morphs into the next identity without cuts.

  - type: image
    src: ""
    label: "GP"

  - type: text
    body: |
      **Architecture.** StyleGAN3 backbone with a custom latent-space interpolator
      written in CUDA. The random walk uses Perlin noise in 512-dimensional space
      to create organic transitions. A separate classifier network filters out
      low-quality generations in real time, ensuring only convincing portraits
      reach the screen.

  - type: compare
    before: ""
    beforeLabel: "Early training (epoch 50)"
    after: ""
    afterLabel: "Final model (epoch 2000)"

  - type: text-image
    image: ""
    label: "GP"
    body: |
      Installation view — the piece projected on a 4-metre wall in a darkened
      gallery, creating an endless parade of synthetic faces.
    flip: true
---
