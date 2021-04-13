import * as path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import babel from "rollup-plugin-babel";
import svelte from "rollup-plugin-svelte";

// configs  here
import { china } from "./rollup_configs/2020-05-china.config";
import { alicorp } from "./rollup_configs/2020-05-alicorp.config.js";
import { papua } from "./rollup_configs/2020-04-papua-deforestation.config.js";
import { palmOil } from "./rollup_configs/2020-04-palm-oil.config.js";
import { fireMaps } from "./rollup_configs/fire-maps.js";

const production = !process.env.ROLLUP_WATCH;
const PROJECT_SLUG = path.basename(__dirname);

const deps = {
  Highcharts: "https://code.highcharts.com/highcharts.js",
  mapboxgl: "https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.js",
};

export default [
  ...fireMaps,
  ...alicorp,
  ...china,
  ...papua,
  ...palmOil,

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
        dedupe: importee => importee === "svelte" || importee.startsWith("svelte/"),
      }),
      commonjs(),

      json(), // so we can import json files

      // use process.env in browser code
      replace({
        "process.env.MAPBOX_TOKEN_R": JSON.stringify(process.env.MAPBOX_TOKEN_R),
        "process.env.MAPBOX_TOKEN": JSON.stringify(process.env.MAPBOX_TOKEN),
        "process.env.GIT_BRANCH": JSON.stringify(process.env.GIT_BRANCH),
        "process.env.ASSET_PATH": JSON.stringify(process.env.ASSET_PATH),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
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
