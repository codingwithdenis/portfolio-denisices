---
title: "Latent Synthesis"
initials: "LS"
category: "ia"
categoryLabel: "IA"
year: "2025"
thumb: ""
url: ""
weight: 7
description: |
  An exploration of the latent space between text and image. Using diffusion
  models as a creative partner, each output is the result of a conversation —
  prompts iterated, refined, and recombined until the machine's hallucination
  aligns with the artist's intention.
blocks:
  - type: text
    body: |
      **Process.** Every piece begins as a text prompt, but never the first one.
      The method involves writing dozens of variations, feeding them through a
      fine-tuned diffusion model, then selecting, blending, and re-prompting
      based on what emerges. The machine proposes; the human curates.

  - type: image
    src: ""
    label: "LS"

  - type: text
    body: |
      **Tooling.** Built with Stable Diffusion XL and a custom LoRA trained on
      the artist's own photographic archive. This creates a visual signature
      that persists across generations — a consistent texture palette, lighting
      sensibility, and compositional grammar that makes each piece feel like it
      belongs to the same hand, even when the subject changes completely.

  - type: compare
    before: ""
    beforeLabel: "Raw output"
    after: ""
    afterLabel: "Curated result"

  - type: text-image
    image: ""
    label: "LS"
    body: |
      Detail view showing the texture granularity preserved through the LoRA
      fine-tuning process. The model learned to reproduce film grain and lens
      flare from the training set.
    flip: false
---
