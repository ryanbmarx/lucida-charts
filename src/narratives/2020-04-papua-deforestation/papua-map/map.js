import mapboxgl from "mapbox-gl";
import { format } from "d3-format";

import markers from "./markers.json";

export function initMap() {
  const formatter = format(".1%");

  mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
  // Init map
  const map = new mapboxgl.Map({
    container: "map", // HTML container id
    style: "mapbox://styles/ryanbmarx/ck9ipxq9g02g61inhsybrxccl", // style URL
    center: [137.595134, -4.605292], // starting position as [lng, lat]
    zoom: 6,
  });

  // set map to fit our markers
  const ne = { lng: "142.99491427343645", lat: "0.2402043575591506" };
  const sw = { lat: "-9.418022518884769", lng: "132.19535372656105" };
  map.fitBounds([ne, sw]);

  // Add UI
  map.addControl(new mapboxgl.NavigationControl());

  // Add our markers
  for (let m of markers) {
    const popup = makePopup(m);

    // create a HTML element for each feature
    const el = getMapPin();
    const mapOptions = {
      element: el,
      offset: 0,
      anchor: "bottom",
    };
    const marker = new mapboxgl.Marker(mapOptions).setLngLat(m.coord).setPopup(popup).addTo(map);
  }

  function makePopup(m) {
    // Kota Jayapura had the most relative tree cover loss at 9.7% compared to an average of 2.2%.
    const avg = formatter(0.022);
    const loss = formatter(m.loss);
    return new mapboxgl.Popup().setHTML(
      `<p class="tooltip-text"><strong>${m.label.toUpperCase()}</strong> had a relative tree cover loss of <strong>${loss}</strong> compared to an average of <strong>${avg}</strong>.</p>`
    );
  }
}

function getMapPin(classes = []) {
  const pin = document.createElement("div");
  pin.classList.add("pin");
  if (classes.length) {
    classes.forEach((c) => pin.classList.add(c));
  }
  const pinBody = document.createElement("div");
  pinBody.classList.add("pin__body");
  pin.appendChild(pinBody);

  // const pinPulse = document.createElement("div");
  // pinPulse.classList.add("pin__pulse");
  // pin.appendChild(pinPulse);

  return pin;
}
