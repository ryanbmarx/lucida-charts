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
    style: "mapbox://styles/ryanbmarx/ckahsk7jb08x71iph5exh0scu", // style URL
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
      "0&nbsp;-&nbsp;250 tons CO2 per Ha",
      "251 - 500",
      "501 - 750",
      "751 - 1000",
      "1001+",
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
    map.on("click", "indonesia-carbon-stock", function (e) {
      const pop = makePopup(e);
      pop.setLngLat(e.lngLat).addTo(map);
    });
  });

  /*

function makePopup(f) {
  const formatter = format(".1f");
  return new mapboxgl.Popup().setHTML(
    `<p class="tooltip-text"><strong>${
      f.properties.ADM2_EN
    }</strong> has a carbon stock of <strong>${formatter(
      f.properties.carbon_carbon
    )} tons</strong> of carbon dioxide per hectare.</p>`
  );
}
*/

  function makePopup(e) {
    const features = map.queryRenderedFeatures(e.point);
    const regency = features[0].properties.ADM2_EN;
    const carbon_carbon = format(",.1f")(features[0].properties.carbon_carbon);
    return new mapboxgl.Popup().setHTML(
      `<strong>${regency}</strong> has <strong>${carbon_carbon} tons</strong> of carbon dioxide per hectare.`
    );
  }
}
