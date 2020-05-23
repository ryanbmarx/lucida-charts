import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import * as path from "path";

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

export const options = {
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
