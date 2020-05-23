# lucida-charts

This is the repository for all the visual story data visulatizations for the [Lucida Project](https://lucidamktstg.wpengine.com/narratives/). This repo started off small and has grown much larger than the dev environment I built around it. It needs a refactor and I will thank you for not judging me based on how messy this room is. :P

## The tools

This is a node project. It uses [postcss](https://postcss.org/) for css preprocessing and [rollup](https://rollupjs.org/guide/en/) for javascript bundling. It also uses a scratch-built artisnal script by yours truly to handle moving static files (.html, .csv, .json, etc.) from `src` to `public`. Like I said, it's probably time to rethink this a little bit.

The primary charting tool is [Highcharts](https://highcharts.com). There is a utility file in `src/theme` which sets a lot of Highcharts options. [D3](https://d3js.org) is used sparingly, only for it's utility in parsing CSVs and formatting numbers. Several visual stories use [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/api/) and [topojson](https://github.com/topojson/topojson) for cartographical displays. There are a couple, small custom-built chart forms in the `src/utils/` directory. At present, there are no major JS framesworks at work.

Each of these visual stories is built to live in iframe, using the npm package [@newswire/frames](https://www.npmjs.com/package/@newswire/frames/v/0.2.0).

## Getting started

- Clone the repo (`git clone`)
- Install dependencies (`npm ci`)
- Set your `.env` file: There really aren't any keys you will need, except for the mapbox access token. If you really need it, ask me, or get your own. The project probably should have its own.

### The content

Each visual story has its own directory in `src/narratives`. All visualizations — used and abandoned — live here.

### Working on things

`npm run dev` is the primary watch-and-build function. It will bundle all JS, process and CSS and move all static files when it detects changes. It also will start the webserver. All your graphics can be seen at `localhost:5000`.

If you are starting a new narrative, you'll need to add your JS file to rollup and make a new index.html.

### The index

Included here is a little [sveltejs](https://sveltejs.dev) app which indexes the public directory and creates clickable links to easily access

### Setting up the iframes in wordpress.

One you are finished with a chart, and are ready to add it to a narrative, upload it using SFTP to the media library. All graphics live in `/wp-content/uploads/graphics/narratives/ ...`. Ask if you need help.

Each visual story is built using the worpdress Gutenberg editor.

![alt text](https://ilarge.lisimg.com/image/8405494/960full-police-academy-4%3A-citizens-on-patrol-screenshot.jpg "Hollywood mega-star Steve Guttenberg")

There are three sections:

#### The cover

The cover is made using a single, custom block and is pretty self explanatory. For any narrative with these graphics, it needs a resuable block called `Narrative graphics CSS for embeds`. It contains the following, necessary, CSS and is only required once per narrative and should be in the cover:

```css
<style>
[data-frame-src] {
  min-height: 410px;
}

@media all and (min-width: 992px) {
  [data-frame-src]:not(.no-flex),
  [data-frame-src]:not(.no-flex) iframe {
    height: 100%;
  }
}
</style>
```

#### The content

Each slide is it's own custom gutenberg block. An indivudal graphic is added to the `slide visual body` section of the block using a custom HTML block with the following code:

```html
<div
  data-frame-src="/wp-content/uploads/graphics/narratives/path/to/narrative/index.html"
  data-frame-title="chart title"
  data-frame-sandbox="allow-scripts allow-same-origin"
></div>
```

The `data-frame-src` is required, and should point to an actual html file (in most cases: index.html). The initialization script will target divs with these data attributes. In most cases, the graphic title will be entered into wordpress (and not be part of the iframed presentation). Even so, for a11y reasons, the `title` property of the div should be set to the chart title.

#### The footer

The footer also is a single, reusable block. For narratives visualizations to work, it also requires a reusable block: `Narrative graphics javascript for embeds`

It contains the following code, which initializes all of the graphic iframes. It is required only once per narrative and should be in the footer.

```js
<script type="module">
    import { autoInitFrames } from 'https://unpkg.com/@newswire/frames/dist/index.mjs';

    window.addEventListener("DOMContentLoaded", function (e) {
      autoInitFrames();
    })
  </script>
```
