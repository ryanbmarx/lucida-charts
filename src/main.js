// import Narrative from "./Narrative.svelte";
import Index from "./components/Index.svelte";
import pages from "./structure.json";

const app = new Index({
  hydrate: true,
  target: document.body,
  props: {
    pages: pages,
  },
});

export default app;
