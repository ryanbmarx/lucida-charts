import { options } from "./options";

export const fireMaps = [
  {
    input: "src/fire-maps/peru/script.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file: "public/fire-maps/peru/script.min.js",
    },
    ...options,
  },
  {
    input: "src/fire-maps/colombia/script.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file: "public/fire-maps/colombia/script.min.js",
    },
    ...options,
  },
  {
    input: "src/fire-maps/brazil/script.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file: "public/fire-maps/brazil/script.min.js",
    },
    ...options,
  },
  {
    input: "src/fire-maps/indonesia/script.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "base",
      file: "public/fire-maps/indonesia/script.min.js",
    },
    ...options,
  },
];
