import Narrative from "./Narrative.svelte";
import pages from "./structure.json";

const narrative = new Narrative({
  hydrate: true,
  target: document.body,
  props: {
    pages: pages,
  },
});

export default index;
