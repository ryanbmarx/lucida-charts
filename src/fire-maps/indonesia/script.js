import { initFrame } from "@newswire/frames";
import countries from "../../geo/indonesia-boundary.json";
import { colors } from "../../theme/lucida-colors";

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  initMap();
});

function initMap() {
  mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-v9",
    center: [118.66255, -2.58763],
    zoom: 3.7,
  });

  map.on("load", function () {
    map.addSource("countries", {
      type: "geojson",
      data: countries,
    });

    map.addLayer({
      id: "border-dropshadow",
      type: "line",
      source: "countries",
      layout: {},
      paint: {
        "line-color": "#000000",
        "line-width": 8,
        "line-blur": 5,
        "line-opacity": 0.5,
      },
    });

    map.addLayer({
      id: "border",
      type: "line",
      source: "countries",
      layout: {},
      paint: {
        "line-width": 1,
        "line-color": "#fff",
      },
    });

    fetch("./indonesia-fires.json")
      .then(r => r.json())
      .then(indonesiaData => {
        map.addSource("indonesia", {
          type: "geojson",
          data: indonesiaData,
        });

        map.addLayer({
          id: "fires",
          type: "circle",
          source: "indonesia",
          paint: {
            "circle-color": colors.gold,
            "circle-radius": 4,
            "circle-opacity": {
              property: "BRIGHTNESS",
              stops: [
                [280, 0],
                [380, 1],
              ],
            },
          },
        });
        map.on("mousemove", "fires", function (e) {
          map.getCanvas().style.cursor = "pointer";
          popup
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(
              `April ${e.features[0].properties["ACQ_DATE"].slice(8, 10)}`
            )
            .addTo(map);
        });
        map.on("mouseleave", "fires", function () {
          map.getCanvas().style.cursor = "";
          popup.remove();
        });
        filterBy("2020-04-30T00:00:00.000Z");
      })
      .catch(e => console.error(e));

    var wrld_filters = ["==", "CNTRY_NAME", "Indonesia"];
    map.setFilter("border", wrld_filters);
    map.setFilter("border-dropshadow", wrld_filters);

    function filterBy(date) {
      var filters = ["<=", "ACQ_DATE", date];
      map.setFilter("fires", filters);
    }

    document.getElementById("date").textContent = "April 30, 2020";
    document.getElementById("slider").addEventListener("input", function (e) {
      let adate = +e.target.value;
      let day = new Date(adate).getDate();
      let stringDay = ("0" + day).slice(-2);
      const testDate = `2020-04-${stringDay}T00:00:00.000Z`;
      document.getElementById("date").textContent = `April ${day}, 2020`;
      filterBy(testDate);
    });

    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
  });

  map.scrollZoom.disable();
  map.addControl(new mapboxgl.NavigationControl());
}
