---
title: "Neural Drift"
initials: "ND"
category: "code"
categoryLabel: "Creative Coding"
year: "2024"
thumb: ""
url: ""
weight: 4
description: |
  An AI-assisted visual meditation tool. A neural network interprets live camera
  input and transforms it into drifting, painterly abstractions. The result is
  a hybrid space between photography, painting, and machine perception.
blocks:
  - type: text
    body: |
      **Core idea.** What does a camera see when it stops trying to be accurate?
      Neural Drift feeds live webcam frames through a lightweight style-transfer
      network trained on early 20th-century landscape painters. The output is a
      real-time oil-on-canvas abstraction of whatever the camera points at.

  - type: text-image
    image: ""
    label: "ND"
    body: |
      Before and after — raw camera input (left) processed through the
      style-transfer model (right).
    flip: false

  - type: text
    body: |
      **Architecture.** The model is a MobileNet-v2 encoder paired with a custom
      decoder, quantised to run client-side via TensorFlow.js at 12fps on a
      laptop. Latent-space interpolation between style references creates
      continuous drift even when the camera input is static, giving the piece
      its meditative quality.

  - type: image
    src: ""
    label: "ND"
---
