import { initFrame } from "@newswire/frames";
import countries from "../../geo/peru-boundary.json";
import { colors } from "../../theme/lucida-colors";
import { csvParse } from "d3";
import { apdate } from "journalize";
import debounce from "lodash.debounce";

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  initMap();
});
function initMap() {
  mapboxgl.accessToken = process.env.MAPBOX_TOKEN_R;

  // CONFIG STUFF
  const SLUG = "peru";
  const LOCATION = "Peru";
  const CENTER = [-74.97638, -9.39599];

  // UI ELEMENTS
  const SLIDER = document.getElementById("slider");
  const END_DATE = document.getElementById("date");

  // INIT THE MAP
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-v9",
    zoom: 3.7,
    center: CENTER,
  });
  map.scrollZoom.disable();
  map.addControl(new mapboxgl.NavigationControl());

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

    // GET THE FIRES
    fetch(`./${SLUG}.csv`)
      .then(r => {
        return r.ok ? r.text() : Promise.reject(r.status);
      })
      .then(d => {
        return csvParse(d, function (f) {
          return { lat: f.latitude, lng: f.longitude, date: new Date(f.acq_date) };
        });
      })
      .then(data => {
        // generate a GEOJSON blob with the data, by adding it to
        // a feature collection. Sort the coordinates by date
        return {
          type: "FeatureCollection",
          features: data
            .sort((a, b) => {
              return a.date - b.date;
            })
            .map(d => {
              return {
                type: "Feature",
                geometry: { type: "Point", coordinates: [d.lng, d.lat] },
                properties: {
                  ACQ_DATE: new Date(d.date).getTime(),
                },
              };
            }),
        };
      })
      .then(geoJSON => {
        map.addSource(SLUG, {
          type: "geojson",
          data: geoJSON,
        });

        map.addLayer({
          id: "fires",
          type: "circle",
          source: SLUG,
          paint: {
            "circle-color": colors.gold,
            "circle-radius": 4,
            "circle-opacity": 0.8,
          },
        });

        map.on("mousemove", "fires", function (e) {
          map.getCanvas().style.cursor = "pointer";
          popup
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(`${apdate(new Date(e.features[0].properties["ACQ_DATE"]))}`)
            .addTo(map);
        });
        map.on("mouseleave", "fires", function () {
          map.getCanvas().style.cursor = "";
          popup.remove();
        });

        // INIT THE UI
        const FIRST_FIRE_DATE = new Date(geoJSON.features[0].properties.ACQ_DATE);
        const LAST_FIRE_DATE = new Date(geoJSON.features[geoJSON.features.length - 1].properties.ACQ_DATE);

        document.getElementById("start-date").textContent = `Fires in ${LOCATION} from ${apdate(FIRST_FIRE_DATE)}, to`;

        SLIDER.setAttribute("min", FIRST_FIRE_DATE.getTime());
        SLIDER.setAttribute("max", LAST_FIRE_DATE.getTime());
        SLIDER.value = LAST_FIRE_DATE.getTime();

        filterBy(LAST_FIRE_DATE);
      })
      .catch(e => console.error(e));

    var wrld_filters = ["==", "CNTRY_NAME", LOCATION];
    map.setFilter("border", wrld_filters);
    map.setFilter("border-dropshadow", wrld_filters);

    function filterBy(date) {
      var filters = ["<=", "ACQ_DATE", date.getTime()];
      map.setFilter("fires", filters, {});
      END_DATE.textContent = `${apdate(date)}:`;
    }
    filterBy = debounce(filterBy, 300);

    SLIDER.addEventListener("input", function (e) {
      let adate = +e.target.value;
      let d = new Date(adate);
      filterBy(d);
    });

    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
  });
}
