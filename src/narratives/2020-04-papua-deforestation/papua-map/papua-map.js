import { initChart } from "./chart";
import { initMap } from "./map";

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Map DOMContent is loaded");
  initMap();
  initChart();
});
