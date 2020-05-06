import Index from "./Index.svelte";
import pages from "./structure.json";

const index = new Index({
  hydrate: true,
  target: document.body,
  props: {
    pages: pages
  }
});

export default index;
