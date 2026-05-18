# Guia do Portfólio — Hugo

## 📁 Estrutura de pastas

```
Portfolio/
├── content/
│   ├── _index.md                          # Página inicial (não mexa)
│   ├── info.md                            # Página About / Contato
│   └── projects/                          # ⭐ SEUS PROJETOS FICAM AQUI
│       ├── kinetic-type.md                # Cada .md = um projeto
│       └── ...
├── layouts/                               # Templates HTML (não mexa)
├── static/
│   ├── css/main.css                       # Estilos (não mexa)
│   └── js/main.js                         # Scripts (não mexa)
├── config.toml                            # Configuração do site
└── .github/workflows/hugo.yml             # CI/CD automático
```

---

## 📝 Anatomia de um projeto

Cada arquivo .md dentro de `content/projects/` vira um card no grid e uma página individual.

### Exemplo completo:

```yaml
---
title: "Meu Projeto"                    # Nome que aparece no card e na página
initials: "MP"                           # Placeholder quando não tem imagem
category: "motion"                       # motion | code | video
categoryLabel: "Motion Design"           # Rótulo visível
year: "2026"                             # Ano de publicação
thumb: ""                                # URL da imagem (deixe "" pra usar initials)
url: ""                                  # Link opcional pro projeto ao vivo
weight: 1                                # Menor número = aparece primeiro na lista
description: |                           # Texto introdutório do projeto
  Aqui vai a descrição em **markdown**.
  Pode usar **negrito**, *itálico*, etc.

blocks:                                  # Blocos de conteúdo da página do projeto

  - type: text                           # ── TEXTO FULL-WIDTH ──
    body: |
      **Título.** Texto em markdown...
      Parágrafo novo com mais texto.

  - type: image                          # ── IMAGEM ──
    src: ""                              # URL da imagem (deixe "" pra placeholder)
    label: "MP"                          # Texto do placeholder quando src vazio

  - type: text-image                     # ── TEXTO + IMAGEM LADO A LADO ──
    image: ""                            # URL da imagem
    label: "MP"                          # Placeholder quando image vazio
    body: |
      Texto que aparece ao lado da imagem.
    flip: false                          # false = imagem à esquerda, true = direita

  - type: video                          # ── VÍDEO EMBED ──
    src: "https://youtube.com/embed/..."  # Link do embed YouTube ou Vimeo
    body: |                              # Legenda opcional abaixo do vídeo
      Descrição do vídeo.
---
```

---

## 🎨 Tipos de bloco

### `text` — Texto completo
Renderiza o texto ocupando toda a largura. Suporta markdown:
- `**negrito**` → **negrito**
- `*itálico*` → *itálico*
- `` `código` `` → `código`

### `image` — Imagem sozinha
Se `src` estiver vazio, mostra as iniciais como placeholder (igual ao design original).
Se `body` estiver preenchido, renderiza imagem + descrição lado a lado.

### `text-image` — Texto com imagem ao lado
Duas colunas: imagem de um lado, texto do outro.
- `flip: false` → imagem na esquerda, texto na direita
- `flip: true` → imagem na direita, texto na esquerda

### `video` — Vídeo embed
Embed YouTube ou Vimeo em 16:9. O `body` é opcional (legenda).

---

## ➕ Como adicionar um projeto

1. Crie um arquivo novo em `content/projects/`
   ```
   content/projects/meu-novo-projeto.md
   ```
2. Copie o frontmplate de um projeto existente
3. Preencha com seus dados
4. Commit e push:
   ```bash
   git add .
   git commit -m "Adiciona novo projeto"
   git push
   ```

O deploy é automático — em ~30 segundos o site atualiza.

---

## 🗑️ Como remover um projeto

Apague o arquivo `.md`:
```bash
git rm content/projects/meu-projeto.md
git commit -m "Remove projeto"
git push
```

---

## 🔄 Como reordenar os projetos

Mude o campo `weight` no frontmatter de cada projeto:

```yaml
weight: 1   # ← aparece primeiro
weight: 2   # ← aparece segundo
weight: 3   # ← aparece terceiro
```

---

## 🖼️ Como colocar imagens (Cloudinary)

1. Vai em **https://cloudinary.com/console** (cloud name: `dtakrihis`)
2. Clique em **"Upload"** e selecione suas fotos
3. Depois de upar, clique na imagem para copiar a URL
4. Cole nos campos `thumb`, `src` ou `image` do seu projeto

Formato da URL:
```
https://res.cloudinary.com/dtakrihis/image/upload/vXXXXXXXX/nome-da-imagem.jpg
```

Se preferir serviços mais simples:
| Serviço | Exemplo de URL | Limite |
|---------|---------------|--------|
| Cloudinary | `res.cloudinary.com/dtakrihis/...` | 25GB grátis |
| imgBB | `i.ibb.co/CODIGO/imagem.jpg` | Ilimitado |
| Imgur | `i.imgur.com/CODIGO.jpg` | Ilimitado |

---

## 🎬 Como colocar vídeos

Para YouTube:
1. Faça upload do vídeo (pode ser "Não listado")
2. Clique em **Compartilhar → Incorporar**
3. Copie o embed URL: `https://youtube.com/embed/CODIGO`
4. Cole no campo `src` de um bloco `type: video`

```yaml
- type: video
  src: "https://youtube.com/embed/CODIGO"
  body: "Descrição opcional do vídeo"
```

---

## 📄 Página About (info.md)

Editando `content/info.md` você pode mudar o texto da bio:

```yaml
---
title: "Info"
layout: "info"
---

Seu texto de bio aqui em **markdown**.
Pode ter vários parágrafos.
```

O email, Instagram e LinkedIn são controlados pelo `config.toml`:
```toml
[params]
  email = "seu@email.com"
  instagram = "https://instagram.com/seu-usuario"
  linkedin = "https://linkedin.com/in/seu-usuario"
```

---

## 📦 Deploy automático

Você só precisa fazer:
```bash
git add .
git commit -m "O que mudou"
git push
```

O GitHub Actions roda automaticamente:
1. Instala o Hugo
2. Compila o site
3. Publica no GitHub Pages

Em ~30 segundos o site atualiza em **https://denisices.com.br**

---

## ⚙️ Comandos úteis (local)

```bash
# Visualizar o site localmente
hugo server

# Visualizar com URL externa
hugo server --bind 0.0.0.0 --port 1313

# Compilar sem subir
hugo --minify

# Compilar e ver os arquivos gerados
hugo --minify && dir public
```
