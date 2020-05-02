import { initChart } from "./chart";
import { initMap } from "./map";
import { initFrame } from "@newswire/frames";

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Map DOMContent is loaded");
  initFrame();
  initMap();
  initChart();
});
