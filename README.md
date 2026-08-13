# levi-jiang.github.io

Personal portfolio site, built as a static site and served with GitHub Pages.

Layout inspired by the clean editorial style of journalist portfolios.

## Structure

```
index.html        Home / hero + bio
resume.html       Experience, education, skills
writing.html      Selected articles (card grid)
multimedia.html   Data viz / video / audio projects
photography.html  Photo gallery
contact.html      Contact info + form
css/style.css     Shared styles
js/main.js        Mobile nav + contact form
assets/           Your images, headshot, resume PDF
```

## Editing

All content is plain HTML — open any `.html` file and replace the placeholder
text and `#` links with your own. See `assets/README.md` for the images to add.

## Local preview

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Publishing

Push to `main` and enable GitHub Pages (Settings → Pages → Source: `main` branch,
`/root`). The site publishes at https://levi-jiang.github.io
