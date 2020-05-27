<script>
  import { onMount } from "svelte";
  import Narrative from "./Narrative.svelte";
  import { generateListIndex } from "../utils/generate-list-index.js";
  export let pages;

  let pageTitle = "Lucida graphics";
  let narrativeVisible = false;
  let embed;
  let format = "stacked";
  let list = "<p>Nothing</p>";

  onMount(() => {
    list = generateListIndex(pages);
    const u = new URL(window.location.href);
    embed = u.searchParams.get("embed");
    if (u.searchParams.get("format")) format = u.searchParams.get("format");
    if (u.searchParams.get("pageTitle"))
      pageTitle = u.searchParams.get("pageTitle");
  });

  function toggle(e) {
    embed = null;
    pageTitle = "Lucida graphics";
    window.location.href = window.location.origin;
  }
</script>

<style>
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

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>
{#if embed}
  <Narrative {embed} {format} {pageTitle} />
  <button class="btn" on:click={toggle}>&times;</button>
{:else}
  <div class="drawer">
    <h1>Lucida Graphics & Narratives</h1>
    {@html list}
  </div>
{/if}
