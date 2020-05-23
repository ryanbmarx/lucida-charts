import { options } from "./options";
export const alicorp = [
  {
    input: "src/narratives/2020-05-alicorp/palm-oil-production/script.js",
    external: ["Highcharts"],
    output: {
      globals: {
        Highcharts: "highcharts",
      },
      sourcemap: true,
      format: "iife",
      name: "financiers",
      file:
        "public/narratives/2020-05-alicorp/palm-oil-production/script.min.js",
    },
    ...options,
  },
  {
    input: "src/narratives/2020-05-alicorp/stock-closing-prices/script.js",
    external: ["Highcharts", "HighchartsAnnotations"],
    output: {
      globals: {
        Highcharts: "highcharts",
        HighchartsAnnotations: "highcharts-annotations",
      },
      sourcemap: true,
      format: "iife",
      name: "financiers",
      file:
        "public/narratives/2020-05-alicorp/stock-closing-prices/script.min.js",
    },
    ...options,
  },
];
