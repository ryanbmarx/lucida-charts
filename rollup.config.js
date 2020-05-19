import * as path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import babel from "rollup-plugin-babel";
import svelte from "rollup-plugin-svelte";

const production = !process.env.ROLLUP_WATCH;
const PROJECT_SLUG = path.basename(__dirname);

function getBabel() {
  return babel({
    exclude: "node_modules/**",
    extensions: [".js", ".mjs", ".svelte"],
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            esmodules: true,
          },
        },
      ],
    ],
  });
}

const options = {
  plugins: [
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: true,
      dedupe: importee =>
        importee === "svelte" || importee.startsWith("svelte/"),
    }),
    commonjs(),

    json(), // so we can import json files

    getBabel(),

    replace({
      "process.env.GIT_BRANCH": JSON.stringify(process.env.GIT_BRANCH),
      "process.env.ASSET_PATH": JSON.stringify(process.env.ASSET_PATH),
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.PROJECT_SLUG": JSON.stringify(PROJECT_SLUG),
      "process.env.MAPBOX_TOKEN": JSON.stringify(process.env.MAPBOX_TOKEN),
    }),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

const deps = {
  Highcharts: "https://code.highcharts.com/highcharts.js",
  mapboxgl: "https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.js",
};

export default [
  {
    input: "src/narratives/2020-05-china/financiers/financiers.js",
    external: ["Highcharts"],
    output: {
      globals: {
        Highcharts: "highcharts",
      },
      sourcemap: true,
      format: "iife",
      name: "financiers",
      file: "public/narratives//2020-05-china/financiers/financiers.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-05-china/exports-to-china/exports.js",
    external: ["Highcharts"],
    output: {
      globals: {
        Highcharts: "highcharts",
      },
      sourcemap: true,
      format: "iife",
      name: "financiers",
      file: "public/narratives//2020-05-china/exports-to-china/exports.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-05-china/palm-oil-market/imports.js",
    external: ["Highcharts", "Treemap", "Heatmap"],
    output: {
      globals: {
        Highcharts: "highcharts",
        Treemap: "highcharts/modules/treemap",
        Heatmap: "highcharts/modules/heatmap",
      },
      sourcemap: true,
      format: "iife",
      name: "financiers",
      file: "public/narratives//2020-05-china/palm-oil-market/imports.min.js",
    },
    ...options,
  },
  {
    input:
      "src/narratives/2020-04-papua-deforestation/company-land-loss/land-loss.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "papua",
      file:
        "public/narratives/2020-04-papua-deforestation/company-land-loss/land-loss.min.js",
    },
    ...options,
  },
  {
    input:
      "src/narratives/2020-04-papua-deforestation/tree-loss-province/tree-loss-province.js",
    external: ["Highcharts", "Treemap", "Heatmap"],

    output: {
      globals: {
        Highcharts: "highcharts",
        Treemap: "highcharts/modules/treemap",
        Heatmap: "highcharts/modules/heatmap",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file:
        "public/narratives/2020-04-papua-deforestation/tree-loss-province/tree-loss-province.min.js",
    },
    ...options,
  },
  {
    input:
      "src/narratives/2020-04-papua-deforestation/forest-loss-region/forest-loss-region.js",
    external: ["Highcharts", "Treemap", "Heatmap"],

    output: {
      globals: {
        Highcharts: "highcharts",
        Treemap: "highcharts/modules/treemap",
        Heatmap: "highcharts/modules/heatmap",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file:
        "public/narratives/2020-04-papua-deforestation/forest-loss-region/forest-loss-region.min.js",
    },
    ...options,
  },
  {
    input:
      "src/narratives/2020-04-papua-deforestation/plantations/plantations.js",
    external: ["Highcharts"],
    output: {
      globals: {
        Highcharts: "highcharts",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file:
        "public/narratives/2020-04-papua-deforestation/plantations/plantations.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-papua-deforestation/mills/papua-mills.js",
    external: ["mapboxgl"],
    output: {
      globals: {
        mapboxgl: "mapboxgl",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file:
        "public/narratives/2020-04-papua-deforestation/mills/papua-mills.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-papua-deforestation/papua-map/papua-map.js",
    external: ["mapboxgl", "Highcharts"],
    output: {
      globals: {
        mapboxgl: "mapboxgl",
        Highcharts: "highcharts",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file:
        "public/narratives/2020-04-papua-deforestation/papua-map/papua-map.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-papua-deforestation/carbon/carbon.js",
    external: ["mapboxgl", "Highcharts"],
    output: {
      globals: {
        mapboxgl: "mapboxgl",
        Highcharts: "highcharts",
        turf: "@turf/turf",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file:
        "public/narratives/2020-04-papua-deforestation/carbon/carbon.min.js",
    },
    ...options,
  },
  {
    input:
      "src/narratives/2020-04-papua-deforestation/deforestation-hotspots/deforestation-hotspots.js",
    external: ["mapboxgl", "Highcharts"],
    output: {
      globals: {
        mapboxgl: "mapboxgl",
        Highcharts: "highcharts",
        turf: "@turf/turf",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file:
        "public/narratives/2020-04-papua-deforestation/deforestation-hotspots/deforestation-hotspots.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-palm-oil/top-deforesters/top-deforesters.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file:
        "public/narratives/2020-04-palm-oil/top-deforesters/top-deforesters.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-palm-oil/palm-oil-index/palm-oil-chart.js",
    external: ["Highcharts"],
    output: {
      globals: {
        Highcharts: "highcharts",
      },
      sourcemap: true,
      format: "iife",
      name: "palmoil",
      file:
        "public/narratives/2020-04-palm-oil/palm-oil-index/palm-oil-chart.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-palm-oil/dirty-palm-oil/dirty-palm-oil.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file:
        "public/narratives/2020-04-palm-oil/dirty-palm-oil/dirty-palm-oil.min.js",
    },
    ...options,
  },
  {
    input: "src/main.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/bundle.js",
    },
    plugins: [
      svelte({
        // enable run-time checks when not in production
        dev: !production,
        // Enable hydratabe apps
        hydratable: true,
        // we'll extract any component CSS out into
        // a separate file — better for performance
        css: css => {
          css.write("public/bundle.css");
        },
      }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration —
      // consult the documentation for details:
      // https://github.com/rollup/rollup-plugin-commonjs
      resolve({
        browser: true,
        dedupe: importee =>
          importee === "svelte" || importee.startsWith("svelte/"),
      }),
      commonjs(),

      json(), // so we can import json files

      // use process.env in browser code
      replace({
        "process.env.GIT_BRANCH": JSON.stringify(process.env.GIT_BRANCH),
        "process.env.ASSET_PATH": JSON.stringify(process.env.ASSET_PATH),
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || "development"
        ),
        "process.env.PROJECT_SLUG": JSON.stringify(PROJECT_SLUG),
      }),

      babel({
        exclude: "node_modules/**",
        extensions: [".js", ".mjs", ".svelte"],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                esmodules: true,
              },
            },
          ],
        ],
      }),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereload("public"),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  },
];
