# lucida-charts

This is the repository for all the visual story data visulatizations for the [Lucida Project](https://lucidamktstg.wpengine.com/narratives/). This repo started off small and has grown much larger than the dev environment I built around it. It needs a refactor and I will thank you for not judging me based on how messy this room is. :P

## The tools

This is a node project. It uses [postcss](https://postcss.org/) for css preprocessing and [rollup](https://rollupjs.org/guide/en/) for javascript bundling. It also uses a scratch-built artisnal script by yours truly to handle moving static files (.html, .csv, .json, etc.) from `src` to `public`. Like I said, it's probably time to rethink this a little bit.

Each of these visual stories is built to live in iframe, using the npm package [@newswire/frames](https://www.npmjs.com/package/@newswire/frames/v/0.2.0).

## Getting started

- Clone the repo (`git clone`)
- Install dependencies (`npm ci`)
- Set your `.env` file: There really aren't any keys you will need, except for the mapbox access token. If you really need it, ask me, or get your own. The project probably should have its own.

### The content

Each visual story has its own directory in `src/narratives`. All visualizations — used and abandoned — live here.

### Working on things

`npm run dev` is the primary watch-and-build function. It will bundle all JS, process and CSS and move all static files when it detects changes. It also will start the webserver. All your graphics can be seen at `localhost:5000`.

### The index

Included here is a little [sveltejs](https://sveltejs.dev) app which indexes the public directory and creates clickable links to easily access
