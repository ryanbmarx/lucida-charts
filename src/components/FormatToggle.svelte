<script>

</script>

<style>
  .toggle-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    font: 14px/1em "Lato", sans-serif;
  }

  #format {
    position: absolute;
    left: -1000vw;
    top: 0;
  }

  .toggle {
    width: 3em;
    height: 2em;
    position: relative;
    margin: 0 0 0 0.5em;
  }

  .toggle__inner {
    content: "";
    display: block;
    height: 1.5em;
    width: 1.5em;
    background: red;
    border: 2px solid var(--background-color, transparent);

    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    z-index: 3;

    transition: all 150ms ease;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toggle::after {
    content: "";
    display: block;
    height: 6px;
    width: 100%;
    background: #333;
    border-radius: 100vw;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%) rotate(0deg);
    transition: all 150ms ease;
  }

  .toggle-wrapper .toggle__inner::after {
    content: "\00D7";
  }
  #format:checked + .toggle-wrapper .toggle__inner {
    left: 100%;
    transform: translate(-100%, -50%) rotate(360deg);
    background: lightgreen;
    transition: all 150ms ease;
  }

  #format:checked + .toggle-wrapper .toggle__inner::after {
    content: "\2713";
  }
</style>

<input on:input type="checkbox" id="format" name="format" />
<label for="format" class="toggle-wrapper">
  Use full-slide layout
  <div class="toggle">
    <div class="toggle__inner" />
  </div>
</label>
