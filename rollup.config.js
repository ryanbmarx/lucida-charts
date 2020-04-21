import * as path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import babel from "rollup-plugin-babel";
// import multi from "@rollup/plugin-multi-entry";

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
      dedupe: (importee) => importee === "svelte" || importee.startsWith("svelte/"),
    }),
    commonjs(),

    json(), // so we can import json files

    getBabel(),

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
};

export default [
  {
    input: "src/narratives/base.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file: "public/narratives/base.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-palm-oil/top-deforesters/top-deforesters.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file: "public/narratives/2020-04-palm-oil/top-deforesters/top-deforesters.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-palm-oil/palm-oil-index/palm-oil-chart.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file: "public/narratives/2020-04-palm-oil/palm-oil-index/palm-oil-chart.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-04-palm-oil/dirty-palm-oil/dirty-palm-oil.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file: "public/narratives/2020-04-palm-oil/dirty-palm-oil/dirty-palm-oil.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/modal.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "modal",
      file: "public/narratives/modal.min.js",
    },
    ...options,
  },
];
