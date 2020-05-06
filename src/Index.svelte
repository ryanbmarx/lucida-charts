<script>
  import { onMount } from "svelte";

  export let pages;
    let links;

  onMount(() => {
      window.pages = pages;
      console.log(pages)
      buildPages(pages);
  });


  function buildPages(data){
      
      if (data.children.length > 0){
          for (let i=0; i< data.children.length; i++){
            const c = data.children[i];
            links.innerHTML += `<h2>${c.name}</h2><ul><li>XXX</li>`;
            for (let i=0; i< c.children.length; i++) {
                const cc = c.children[i];
                const path = cc.path.replace("public", "")
                links.innerHTML += `<li><a href="${path}/index.html">${cc.name}</a></li>`
                if (i === c.children.length - 1) links.innerHTML += "</ul>"
            };
        }
      } 
  }
</script>

<style>

</style>

<h1>Lucida Narratives</h1>

<div bind:this={links}></div>
