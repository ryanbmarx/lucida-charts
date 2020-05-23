import { options } from "./options";

export const palmOil = [
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
];
