import { options } from "./options";

export const china = [
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
];
