<script>
  import { onMount } from "svelte";
  import Narrative from "./Narrative.svelte";
  export let pages;

  let narrativeVisible = false;
  let embed;
  let format = "stacked";
  onMount(() => {
    console.log(pages);
    const u = new URL(window.location.href);
    embed = u.searchParams.get("embed");
    if (u.searchParams.get("format")) format = u.searchParams.get("format");
  });

  function toggle(e) {
    embed = null;
  }
</script>

<style>
  .narratives {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .narratives a {
    text-decoration: none;
  }
  .narratives h2 {
    font: bold 28px/1.3em "Playfair Display", serif;
    padding-bottom: 8px;
    margin: 2rem 0 8px 0;
    border-bottom: 1px solid #aaa;
  }

  .narrative {
    margin: 1em 0;
    font: 16px/1.3em "Lato", sans-serif;
    list-style: disc;
  }

  .btn {
    display: block;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    font-size: 2em;
    justify-content: center;
    border: none;
    font-size: 14px;
    margin: 1em;
    padding: 0.5em 1em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    width: 2em;
    height: 2em;

    position: fixed;
    top: 0;
    right: 0;
  }
</style>

{#if embed}
  <Narrative {embed} {format} />
  <button class="btn" on:click={toggle}>&times;</button>
{:else}
  <div class="drawer">
    <h1>Lucida Narratives</h1>
    <ul class="narratives">
      {#each pages.children as narrative}
        <li>
          {#if narrative.extension}
            <h2>
              <a href={narrative.path.replace('public', '')}>
                {narrative.name}
              </a>
            </h2>
          {:else}
            <h2>{narrative.name}</h2>
            {#if narrative.children}
              <ul class="narrative">
                {#each narrative.children as graphic}
                  <li>
                    {#if graphic.name && graphic.extension}
                      {graphic.name} (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={graphic.path.replace('public/', '')}>
                        raw
                      </a>
                      |
                      <a
                        href="/?embed={encodeURI('/' + graphic.path.replace('public/', ''))}">
                        iframe
                      </a>
                      )
                    {:else}
                      {graphic.name} (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="{graphic.path.replace('public/', '')}/index.html">
                        raw
                      </a>
                      |
                      <a
                        href="/?embed={encodeURI('/' + graphic.path.replace('public/', '') + '/index.html')}">
                        iframe
                      </a>
                      )
                    {/if}
                  </li>
                {/each}
              </ul>
            {/if}
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}
