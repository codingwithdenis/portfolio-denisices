---
build:
  list: false
title: "Nome do Projeto"
initials: "NP"
category: "code"
categoryLabel: "Creative Coding"
year: "2026"
thumb: "/images/projetos/nome-thumb.jpg"
url: ""
weight: 10
role: "Director, Designer"
description: |
  Resumo curto do projeto. Aparece na grid/listagem. Umas 2-3 linhas no máximo.
blocks:
  # ─── TYPE: text ─────────────────────────────────────────────
  # Só texto. O **negrito no início** vira subtítulo/seção.
  - type: text
    body: |
      **Contexto / Ideia / Premissa.** Use este bloco para introduzir o conceito,
      o problema que motivou o projeto, ou o "porquê". É o espaço para contar a
      história.

  # ─── TYPE: image ────────────────────────────────────────────
  # Imagem grande, ocupa a largura toda. Sem texto ao lado.
  # Se tiver `body`, fica lado a lado (texto + imagem).
  # Com `captionPos: "top"` ou `"bottom"`, o body vira legenda em coluna única.
  - type: image
    src: "/images/projetos/nome-imagem.jpg"
    label: "NP"
    captionPos: "bottom"
    body: |
      Legenda embaixo da imagem (ou em cima com captionPos: "top").

  # ─── TYPE: text-image ───────────────────────────────────────
  # Imagem + legenda lado a lado. `flip: true` inverte a ordem (texto | imagem).
  - type: text-image
    image: "/images/projetos/nome-imagem2.jpg"
    label: "NP"
    body: |
      Legenda descritiva da imagem ao lado. Use para explicar um frame, um teste,
      um detalhe técnico.
    flip: false

  # ─── TYPE: video ────────────────────────────────────────────
  # Embed do YouTube ou Vimeo (16:9). O body é opcional (legenda).
  # Use `captionPos: "top"` pra legenda ficar em cima.
  - type: video
    src: "https://youtube.com/embed/CODIGO"
    captionPos: "top"
    body: |
      Legenda opcional acima ou abaixo do vídeo.

  # ─── TYPE: video-local ──────────────────────────────────────
  # Vídeo hospedado próprio (Cloudinary, etc.), sem iframe.
  # O `poster` é opcional — thumbnail do vídeo.
  - type: video-local
    src: "https://res.cloudinary.com/dtakrihis/video/upload/vXXXXXXXX/video.mp4"
    poster: "https://res.cloudinary.com/dtakrihis/image/upload/vXXXXXXXX/thumbnail.jpg"
    body: |
      Legenda opcional abaixo do vídeo.

  # ─── TYPE: carousel ─────────────────────────────────────────
  # Carrossel/gallery de imagens. Uma URL por linha no `images`.
  - type: carousel
    images:
      - "https://res.cloudinary.com/.../imagem1.jpg"
      - "https://res.cloudinary.com/.../imagem2.jpg"
    body: |
      Legenda opcional abaixo do carrossel.

  # ─── TYPE: compare ──────────────────────────────────────────
  # Comparação antes/depois. Duas imagens lado a lado com labels.
  - type: compare
    before: "/images/projetos/nome-before.jpg"
    beforeLabel: "Antes / rascunho"
    after: "/images/projetos/nome-after.jpg"
    afterLabel: "Depois / final"

  # ─── TYPE: text (com subtítulo diferente) ───────────────────
  # Outro bloco de texto, com outro subtítulo.
  - type: text
    body: |
      **Processo / Técnico / Ferramentas.** Detalhe como foi feito: ferramentas
      usadas (Three.js, Stable Diffusion, After Effects, etc.), decisões técnicas,
      desafios e soluções.

  # ─── TYPE: text-image (com flip) ────────────────────────────
  # Mesmo que text-image, mas com `flip: true` — imagem fica à esquerda.
  - type: text-image
    image: "/images/projetos/nome-imagem3.jpg"
    label: "NP"
    body: |
      Legenda para uma imagem que aparece do lado esquerdo.
    flip: true
---
