<script>
  import { onMount } from "svelte";
  import { autoInitFrames } from "@newswire/frames";
  import { fade, fly, blur } from "svelte/transition";

  export let embed;
  export let pageTitle;
  export let format = "stacked";

  onMount(() => {
    autoInitFrames();
    // const u = new URL(embed);
    // console.log(u);
  });
</script>

<style>
  :global(html body) {
    padding: 0;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Playfair Display", Georgia, serif;
    font-style: normal;
    font-weight: 400;
    color: #1d1e1b;
    line-height: 1.25;
    text-rendering: optimizeLegibility;
  }

  main.body {
    background-color: #e2e0d7;
    background-color: var(--background-color);
    padding: 110px 2vw 2vw 2vw;
    box-sizing: border-box;
    width: 100vw;
  }

  aside {
    box-sizing: border-box;
    background: white;
    padding: 24px;
  }

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    font-family: Lato, sans-serif;
  }

  h4 {
    font-size: 2em;
    margin: 0 0 24px 0;
  }

  section {
    padding: 0 32px 32px 32px;
    margin-bottom: 32px;
    flex: 1;
    background: rgb(245, 244, 241);

    display: flex;
    flex-flow: column nowrap;
  }

  .section__middle {
    flex: 1 1;
  }

  .body--full section {
    padding: 0;
  }

  [data-frame-src] {
    min-height: 410px;
  }

  @media screen and (min-width: 992px) {
    main.body {
      height: 100vh;
    }
    article {
      display: flex;
      align-items: stretch;
      height: 100%;
    }
    section {
      margin: 0 32px 0 0;
    }

    aside {
      width: 40vw;
      height: 100%;
      overflow: scroll;
    }
    [data-frame-src]:not(.no-flex),
    [data-frame-src]:not(.no-flex) :global(iframe) {
      min-height: 100%;
      height: 100%;
      display: block;
    }
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&amp;family=Playfair+Display&amp;display=swap"
    rel="stylesheet" />
</svelte:head>

<main
  transition:fly={{ y: -50, duration: 400 }}
  class="body"
  class:body--full={format === 'full'}
  class:body--stacked={format === 'stacked'}>
  <article>
    <section>
      {#if format === 'stacked'}
        <div class="section__upper">
          <h3>This is the chart headline</h3>
          <p>
            This is some optional chatter. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      {/if}
      <div class="section__middle">
        <div
          data-frame-src={embed}
          data-frame-title="This is the iframe title"
          data-frame-sandbox="allow-scripts allow-same-origin" />
      </div>
    </section>
    <aside class="slide__page__right slide__page__content">
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit: {pageTitle}
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        delectus aperiam odio mollitia vero nemo quidem non illo minus, facilis
        omnis culpa, iusto laudantium aspernatur. Vero praesentium architecto
        libero deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        delectus aperiam odio mollitia vero nemo quidem non illo minus, facilis
        omnis culpa, iusto laudantium aspernatur. Vero praesentium architecto
        libero deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        delectus aperiam odio mollitia vero nemo quidem non illo minus, facilis
        omnis culpa, iusto laudantium aspernatur. Vero praesentium architecto
        libero deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        delectus aperiam odio mollitia vero nemo quidem non illo minus, facilis
        omnis culpa, iusto laudantium aspernatur. Vero praesentium architecto
        libero deleniti.
      </p>
    </aside>
  </article>
</main>
