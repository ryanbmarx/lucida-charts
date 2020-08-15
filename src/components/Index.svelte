<script>
  import { onMount } from "svelte";
  import Narrative from "./Narrative.svelte";
  import FormatToggle from "./FormatToggle.svelte";
  import { generateListIndex } from "../utils/generate-list-index.js";
  export let pages;

  let drawer;
  let pageTitle = "Lucida graphics";
  let narrativeVisible = false;
  let embed;
  let fullContent = false;
  $: format = fullContent ? "full" : "stacked";
  let list = "<p>Nothing</p>";

  onMount(async () => {
    generateListIndex(pages)
      .then(r => (list = r))
      .then(r => {
        for (let link of drawer.querySelectorAll(".iframe")) {
          link.addEventListener("click", handleIframeClick);
        }
      });
    const u = new URL(window.location.href);
    embed = u.searchParams.get("embed");
    if (u.searchParams.get("format")) format = u.searchParams.get("format");
    if (u.searchParams.get("pageTitle"))
      pageTitle = u.searchParams.get("pageTitle");
  });
  function handleIframeClick(e) {
    e.preventDefault();
    const u = new URL(this.href);
    if (u.searchParams.get("embed")) {
      embed = u.searchParams.get("embed");
    }
    if (u.searchParams.get("format")) {
      format = u.searchParams.get("format");
    }
  }

  function toggle(e) {
    embed = null;
    pageTitle = "Lucida graphics";
    window.location.href = window.location.origin;
  }

  function toggleFormat(e) {
    fullContent = !fullContent;
  }

  function initIframe(node) {}
</script>

<style>
  :global(html body) {
    --background-color: #e2e0d7;
    padding: 0;
    margin: 0;
    background: var(--background-color);
  }

  .drawer {
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
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
    padding: 0.5em 1em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    width: 2em;
    height: 2em;
  }
  .controls {
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-family: "MacklinDisplay";
    font-size: 3rem;
    font-weight: 400;
  }
</style>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>
{#if embed}
  <Narrative {embed} {format} {pageTitle} />
  <div class="controls">
    <FormatToggle on:input={toggleFormat} />
    <button class="btn" on:click={toggle}>&times;</button>
  </div>
{:else}
  <div class="drawer" bind:this={drawer}>
    <h1>Lucida Graphics & Narratives</h1>
    {@html list}
  </div>
{/if}
