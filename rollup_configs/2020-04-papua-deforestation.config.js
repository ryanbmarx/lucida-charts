import { options } from "./options";

const NARRATIVE_SLUG = "2020-04-papua-deforestation";

export const papua = [
  {
    input: `src/narratives/${NARRATIVE_SLUG}/company-land-loss/land-loss.js`,
    output: {
      sourcemap: true,
      format: "iife",
      name: "papua",
      file: `public/narratives/${NARRATIVE_SLUG}/company-land-loss/land-loss.min.js`,
    },
    ...options,
  },
  {
    input: `src/narratives/${NARRATIVE_SLUG}/tree-loss-province/tree-loss-province.js`,
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
      file: `public/narratives/${NARRATIVE_SLUG}/tree-loss-province/tree-loss-province.min.js`,
    },
    ...options,
  },
  {
    input: `src/narratives/${NARRATIVE_SLUG}/forest-loss-region/forest-loss-region.js`,
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
      file: `public/narratives/${NARRATIVE_SLUG}/forest-loss-region/forest-loss-region.min.js`,
    },
    ...options,
  },
  {
    input: `src/narratives/${NARRATIVE_SLUG}/plantations/plantations.js`,
    external: ["Highcharts"],
    output: {
      globals: {
        Highcharts: "highcharts",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file: `public/narratives/${NARRATIVE_SLUG}/plantations/plantations.min.js`,
    },
    ...options,
  },
  {
    input: `src/narratives/${NARRATIVE_SLUG}/mills/papua-mills.js`,
    external: ["mapboxgl"],
    output: {
      globals: {
        mapboxgl: "mapboxgl",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file: `public/narratives/${NARRATIVE_SLUG}/mills/papua-mills.min.js`,
    },
    ...options,
  },
  {
    input: `src/narratives/${NARRATIVE_SLUG}/papua-map/papua-map.js`,
    external: ["mapboxgl", "Highcharts"],
    output: {
      globals: {
        mapboxgl: "mapboxgl",
        Highcharts: "highcharts",
      },
      sourcemap: true,
      format: "iife",
      name: "papua",
      file: `public/narratives/${NARRATIVE_SLUG}/papua-map/papua-map.min.js`,
    },
    ...options,
  },
  {
    input: `src/narratives/${NARRATIVE_SLUG}/carbon/carbon.js`,
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
      file: `public/narratives/${NARRATIVE_SLUG}/carbon/carbon.min.js`,
    },
    ...options,
  },
  {
    input: `src/narratives/${NARRATIVE_SLUG}/deforestation-hotspots/deforestation-hotspots.js`,
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
      file: `public/narratives/${NARRATIVE_SLUG}/deforestation-hotspots/deforestation-hotspots.min.js`,
    },
    ...options,
  },
];
