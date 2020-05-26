<script>
  import { onMount } from "svelte";
  import { initFrame } from "@newswire/frames";

  onMount(() => {
    initFrame();
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
    padding: 110px 2vw 2vw 2vw;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
  }

  article {
    display: flex;
    align-items: stretch;
    height: 100%;
  }

  aside {
    background: white;
    padding: 24px;
    width: 40vw;
    height: 100%;
  }

  h4 {
    font-size: 2em;
    margin: 0 0 24px 0;
  }
  section {
    margin-right: 32px;
    flex: 1;
    background: yellow;
  }
  @media screen and (min-width: 992px) {
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&amp;family=Playfair+Display&amp;display=swap"
    rel="stylesheet" />
</svelte:head>

<main class="body">
  <article>
    <section>dsjlfjdklflds</section>
    <aside class="slide__page__right slide__page__content">
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
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
