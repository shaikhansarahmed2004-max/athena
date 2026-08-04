# Athena Website

This project is configured to build as a static website that can be hosted on any static hosting provider.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

## Build static files

```bash
npm run build
```

The static output is generated in the `dist` folder.

## Deploy to static hosting

1. Build the project: `npm run build`
2. Upload the contents of `dist` to your hosting root directory (or publish `dist` directly if your host supports selecting a publish folder).
3. If your hosting provider asks for a build configuration, use:
	- Build command: `npm run build`
	- Publish directory: `dist`

## Why this works for hosting

- Vite produces plain static assets (HTML, CSS, JS, images) in `dist`.
- The project uses relative asset paths so it can work from root domains and subfolders.
