# Portfolio — Denis

Personal portfolio site built with [Hugo](https://gohugo.io/).  
Live at **[https://denisices.com.br](https://denisices.com.br)**

## Quick start

```bash
hugo server
```

## Adding a project

Create a new `.md` file in `content/projects/` with the required frontmatter.  
See [GUIA.md](GUIA.md) (in Portuguese) for full documentation.

## Content blocks

| Type | Description |
|------|-------------|
| `text` | Full-width markdown text |
| `image` | Single image (with optional caption) |
| `text-image` | Side-by-side text and image |
| `video` | YouTube/Vimeo embed (16:9) |
| `compare` | Before/after image comparison slider |

## Categories

Projects can be filtered by category. Current categories:
**All · IA · Design · Motion · Video · Code**

Add a new category by:
1. Setting `category` and `categoryLabel` in a project's frontmatter
2. Adding a `[[menu.main]]` entry in `config.toml`
3. The filter link appears automatically via Hugo menus

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages.

## License

All content © Denis. Code available under MIT.
