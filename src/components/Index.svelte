<script>
  import { onMount } from "svelte";

  export let pages;

onMount(()=>{
    console.log(pages)
})


</script>

<style>
.narratives{
    list-style:none;
    margin: 0;
    padding: 0;
}

.narratives a {
    text-decoration: none;
}
.narratives h2{
    font: bold 28px/1.3em "Playfair Display", serif;
    padding-bottom: 8px;
    margin: 2rem 0 8px 0;
    border-bottom: 1px solid #aaa;
}

.narrative{
    margin: 1em 0;
    font: 16px/1.3em "Lato", sans-serif;
    list-style:disc;
}
</style>

<h1>Lucida Narratives</h1>

<ul class="narratives">
{#each pages.children as narrative}
<li>
{#if narrative.extension}
    <h2><a href="{narrative.path.replace('public','')}">{narrative.name}</a></h2>
{:else}
    <h2>{narrative.name}</h2>
    {#if narrative.children}
    <ul class="narrative">
        {#each narrative.children as graphic}
            <li>
            {#if graphic.name && graphic.extension}
                <a href="{graphic.path.replace('public/', '')}">{graphic.name}</a>
            {:else}
                <a href="{graphic.path.replace('public/', '')}/index.html">{graphic.name}</a>
            {/if}
            </li>
        {/each}
    </ul>
    {/if}    
{/if}
</li>
{/each}
</ul>
