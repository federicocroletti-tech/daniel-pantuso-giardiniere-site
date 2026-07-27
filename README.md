# daniel-pantuso-giardiniere-site

Sito vetrina professionale per Daniel Pantuso, giardiniere e manutentore di aree verdi a Milano e zone limitrofe.

Il progetto usa Angular standalone moderno, SCSS, HTML semantico e un form senza backend che apre WhatsApp con un messaggio precompilato.

## Tecnologie usate

- Angular standalone
- TypeScript
- SCSS
- Angular signals e `computed`
- Asset statici in `public/`
- Nessuna libreria UI esterna
- Nessun backend

## Comandi

```bash
npm install
ng serve
ng build
```

Da una cartella superiore puoi usare anche:

```bash
npm --prefix ./daniel-pantuso-giardiniere-site install
npm --prefix ./daniel-pantuso-giardiniere-site start
npm --prefix ./daniel-pantuso-giardiniere-site run build
```

## Numero WhatsApp

Il numero provvisorio si modifica in `src/app/app.component.ts`, nelle costanti:

- `DISPLAY_PHONE`
- `PHONE_LINK`
- `WHATSAPP_NUMBER`

Il link WhatsApp del form viene generato con Angular `computed` partendo dai campi gestiti tramite `signal`.

## SEO

I metadata principali sono in `src/index.html`:

- title e meta description
- meta robots
- canonical provvisorio
- Open Graph
- Twitter Card
- JSON-LD `ProfessionalService`

I file statici SEO sono in `public/` e vengono copiati nella build Angular tramite la configurazione asset già presente in `angular.json`:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/og-image.svg`

Prima del deploy reale, sostituire numero, email, partita IVA e URL definitivo nei metadata, in `robots.txt` e in `sitemap.xml`.

## Repository

https://github.com/federicocroletti-tech/daniel-pantuso-giardiniere-site.git

## Git

```bash
git remote add origin https://github.com/federicocroletti-tech/daniel-pantuso-giardiniere-site.git
git branch -M main
git add .
git commit -m "Create optimized Angular landing page for Daniel Pantuso"
git push -u origin main
```

## Lighthouse e PageSpeed

Dopo una build production e un deploy pubblico, testare la homepage con:

- Chrome DevTools Lighthouse
- PageSpeed Insights: https://pagespeed.web.dev/

Verificare Performance, Accessibilità, Best Practices e SEO. Il sito è leggero, non usa librerie UI esterne e include metadata, robots.txt, sitemap.xml e contenuti testuali indicizzabili.

## Deploy

### Render

- Build command: `npm install && npm run build`
- Publish directory: `dist/daniel-pantuso-giardiniere-site/browser`
- Static site fallback: `index.html`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist/daniel-pantuso-giardiniere-site/browser`

### Vercel

- Framework preset: Angular
- Build command: `npm run build`
- Output directory: `dist/daniel-pantuso-giardiniere-site/browser`
