import mapboxgl from "mapbox-gl";
import { colors } from "../../../theme/lucida-colors";
import provinces from "../../../geo/indonesia-province-simple.json";
import mills from "./geo/mills.json";
import { getMapPin } from "../../../utils/map-pin";

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

    // Add our boundaries
    map.addSource("provinces", {
      type: "geojson",
      data: provinces,
    });
    map.addLayer({
      id: "provinces",
      type: "line",
      source: "provinces",
      layout: {},
      paint: {
        "line-width": 2,
        "line-color": colors.gold,
        "line-opacity": 0.75,
      },
    });

    // Add our mills
    mills.data.Mill.forEach(mill => {
      // create a HTML element for each feature
      const rspoClass =
        mill.cert === "RSPO Certified" ? "pin--rspo" : "pin--non-rspo";
      const pin = getMapPin([rspoClass]);

      // Our mill coordinattes
      const coordinates = [mill.longitude, mill.latitude];

      // Make a popup for the mill
      const popup = makePopup(mill);

      const mapOptions = {
        element: pin,
        offset: 0,
        anchor: "bottom",
      };
      const marker = new mapboxgl.Marker(mapOptions)
        .setPopup(popup)
        .setLngLat(coordinates)
        .addTo(map);
    });
  });
}

function makePopup(m) {
  const certified = m.cert === "RSPO Certified";
  const is = certified ? "is" : "is not";
  const isClass = certified ? "text--rspo" : "text--non-rspo";
  const not = m.operator.rspo_membershipNumber == null ? "not " : "";
  let s = `<p>The mill <strong>${m.millName}</strong> <strong class="${isClass}">${is} RSPO certified</strong>.`;
  s += ` It is operated by ${m.operator.name}, which is ${not}an RSPO member. `;

  const popupOptions = {
    offset: 30,
  };

  return new mapboxgl.Popup(popupOptions).setHTML(s);
}
