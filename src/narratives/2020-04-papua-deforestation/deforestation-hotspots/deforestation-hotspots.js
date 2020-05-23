import mapboxgl from "mapbox-gl";
import { format } from "d3-format";
import { bounds } from "../../../geo/bounds";

import { initFrame } from "@newswire/frames";
document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  initMap();
});

function initMap() {
  mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
  // Init map
  const map = new mapboxgl.Map({
    container: "map", // HTML container id
    style: "mapbox://styles/ryanbmarx/ckahoo7nc05851ir7v1o9rh0l", // style URL
    center: [135.31471, -3.905906], // starting position as [lng, lat]
    zoom: 4,
  });

  map.on("load", function () {
    // set map to fit our markers
    map.fitBounds([bounds.papua.ne, bounds.papua.sw]);
    // Add UI
    map.addControl(new mapboxgl.NavigationControl());
    map.getCanvas().style.cursor = "pointer";

    const layers = [
      "0&nbsp;-&nbsp;1000 hectares",
      "1001 - 2000",
      "2001 - 3000",
      "2001 - 4000",
      "4000+",
    ];

    const colors = ["#eafeb8", "#feb24d", "#fc4f2c", "#e41b1e", "#bd0026"];

    const legend = document.querySelector("#legend");

    for (let i = 0; i < layers.length; i++) {
      const li = document.createElement("li");

      const layer = layers[i];
      const color = colors[i];

      const dot = document.createElement("span");
      dot.classList.add("legend__dot");
      dot.setAttribute("style", `background-color:${color};`);
      li.appendChild(dot);
      li.innerHTML += layer;
      legend.appendChild(li);
    }
    map.on("click", "treecoverloss", function (e) {
      const pop = makePopup(e);
      pop.setLngLat(e.lngLat).addTo(map);
    });
  });

  function makePopup(e) {
    const features = map.queryRenderedFeatures(e.point);
    const regency = features[0].properties.ADM2_EN;
    const treeLoss = format(",")(features[0].properties.tree_loss);
    return new mapboxgl.Popup().setHTML(
      `<strong>${regency}</strong> has lost <strong>${treeLoss} hectares</strong> of tree cover.`
    );
  }
}
