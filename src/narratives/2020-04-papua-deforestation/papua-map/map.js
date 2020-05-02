import mapboxgl from "mapbox-gl";
import { format } from "d3-format";
import { colors } from "../../../theme/lucida-colors";
import provinces from "./geo/indonesia-province-simple.json"
import markers from "./geo/markers.json";

export function initMap() {
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

    // Add our boundaries
    map.addSource('provinces', {
      type: "geojson",
      data: provinces
    });
    map.addLayer({
      'id': 'provinces',
      'type': 'line',
      'source': "provinces",
      'layout': {},
      'paint': {
        "line-width": 2,
        'line-color': colors.gold,
        "line-opacity": 0.75
      }
    });
  })
}

function makePopup(m) {
  const formatter = format(".1%");

  const avg = formatter(0.022);
  const loss = formatter(m.loss);
  return new mapboxgl.Popup().setHTML(
    `<p class="tooltip-text"><strong>${m.label.toUpperCase()}</strong> had a relative tree cover loss of <strong>${loss}</strong> compared to an average of <strong>${avg}</strong>.</p>`
  );
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

  return pin;
}
