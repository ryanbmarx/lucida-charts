import mapboxgl from "mapbox-gl";
import { format } from "d3-format";
import { colors } from "../../../theme/lucida-colors";

import { initFrame } from "@newswire/frames";
// import * as topojson from "topojson-client";
import { feature } from "topojson-client";
import { json } from "d3-fetch";
import centroid from "@turf/centroid";
import { scalePow } from "d3-scale";
import { extent } from "d3-array";

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  initMap();
});

function initMap() {
  // Our map bounds
  const ne = { lng: "142.99491427343645", lat: "0.2402043575591506" };
  const sw = { lat: "-9.418022518884769", lng: "132.19535372656105" };

  mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
  // Init map
  const map = new mapboxgl.Map({
    container: "map", // HTML container id
    style: "mapbox://styles/ryanbmarx/ck9ipxq9g02g61inhsybrxccl", // style URL
    center: [137.595134, -4.605292], // starting position as [lng, lat]
    zoom: 6,
  });
  map.on("load", function () {
    // set map to fit our markers
    map.fitBounds([ne, sw]);
    // Add UI
    map.addControl(new mapboxgl.NavigationControl());

    json("geo/indonesia-deforestation-hotspots.json")
      .then(data => feature(data, data.objects.indonesia))
      .then(data => {
        let dataExtent = extent(data.features, d =>
          parseInt(d.properties.tree_loss)
        );

        let maxValue = dataExtent[1];
        let maxCircleRadius = 125;

        let scale = scalePow()
          .exponent(0.5)
          .domain([0, maxValue])
          .range([0, maxCircleRadius]);

        data.features.forEach(f => {
          var centroyd = centroid(f);

          const popup = makePopup(f);
          // create a HTML element for each feature
          const el = getMapPin(scale(f.properties.tree_loss));
          const mapOptions = {
            element: el,
            offset: 0,
            anchor: "center",
          };
          const marker = new mapboxgl.Marker(mapOptions)
            .setLngLat(centroyd.geometry.coordinates)
            .setPopup(popup)
            .addTo(map);
        });
        buildLegend(scale);
        return data;
      })
      .then(data => {
        map.addSource("treeloss", {
          type: "geojson",
          data: data,
        });
        map.addLayer({
          id: "treelossCircles",
          type: "line",
          source: "treeloss",
          layout: {},
          paint: {
            "line-width": 1,
            "line-color": colors.gold,
            "line-opacity": 0.75,
          },
        });
      });
  });
}

function makePopup(f) {
  const formatter = format(",");
  return new mapboxgl.Popup().setHTML(
    `<p class="tooltip-text"><strong>${
      f.properties.ADM2_EN
    }</strong> has lost <strong>${formatter(
      f.properties.tree_loss
    )} hectares</strong> of tree cover.</p>`
  );
}

function getMapPin(r, classes = []) {
  const pin = document.createElement("div");
  pin.classList.add("pin", "pin--circle");
  if (classes.length) {
    classes.forEach(c => pin.classList.add(c));
  }
  const pinBody = document.createElement("div");
  pinBody.classList.add("pin__body");
  pinBody.style.width = `${r}px`;
  pinBody.style.height = `${r}px`;

  pin.appendChild(pinBody);
  return pin;
}

function buildLegend(scale) {
  const formatter = format(",");

  const legend = document.querySelector("#legend");
  const legendExamples = [100, 500, 1000];
  legendExamples.forEach((l, index) => {
    const li = document.createElement("li");
    const dot = document.createElement("span");
    dot.classList.add("legend__dot", `legend__dot--${l}`);
    dot.style.width = `${scale(l)}px`;
    dot.style.height = `${scale(l)}px`;
    li.appendChild(dot);
    li.innerHTML += `${formatter(l)} hectares`;
    if (index === 0) li.innerHTML += " of tree cover lost";
    legend.appendChild(li);
  });
}
