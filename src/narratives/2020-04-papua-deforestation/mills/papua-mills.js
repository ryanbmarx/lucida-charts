// import { initChart } from "./chart";
import { initMap } from "./map";
import { initFrame } from "@newswire/frames";

document.addEventListener("DOMContentLoaded", function (e) {
    console.log("Mills DOMContent is loaded");
    initFrame();
    initMap();
    // initChart();
});
