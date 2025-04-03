# Welcome

Feel free to clone this repository and use it to build your own portfolio website. Nuxt is the backbone of this project.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Installing Nuxt Modules

To install modules hosted by the nuxt team on https://nuxt.com/modules:

```bash
npx nuxi@latest module add tailwindcss
```

## Update Nuxt

To update Nuxt itself, use the nuxi command:

```bash
npx nuxi upgrade
```

## Update Packages

To update Nuxt modules, use the same command for [installing](#installing-nuxt-modules) them.

But to update modules that aren't Nuxt modules, run:

```bash
npm update

# or, if the package.json version numbers don't get updated

npm i --save-dev @nuxt/test-utils vitest @vue/test-utils happy-dom
```

## Production

If you need a back-end to be running, you can build the application for production with:

```bash
# npm
npm run build
```

But if you want to deploy your project as a static site, run:

```bash
npm run generate
```

And then you can place the generated content from `.output/public` into your static hosting provider.

Locally preview production build:

```bash
# if you're deploying a static site
npx serve .output/public

# or if you're deploying a server
npm run preview
```
