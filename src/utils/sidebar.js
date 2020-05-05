import { getMax } from "./get-max.js";
import { format } from "./format.js";
/**
 *
 * @param {[]} data Requires data = [{ label: "BlackRock", value: 1533193730.0 }, ...]
 */

export function sidebar(data, maxValue, formatter) {
  let chart = document.createElement("ol");
  chart.classList.add("sidebar");
  let max;
  if (!maxValue) {
    max = getMax(data, "value");
  } else {
    max = maxValue;
  }

  if (!formatter) formatter = format;

  data.forEach((d) => {
    const row = document.createElement("li");
    row.classList.add("sidebar__row");
    if (d.highlight) row.classList.add("sidebar__row--highlight");
    const width = Math.round((d.value / max) * 100);
    let labelClass = width <= 50 ? "sidebar__bar--label-outside" : "";
    row.innerHTML = `<p class="sidebar__label"><a class="profile-link" href="#">${d.label}</a></p>
    <div class="sidebar__bar ${labelClass}">
      <div style="width:${width}%;" class="sidebar__bar-inner">
        <span>${formatter(d.value)}</span>
      </div>
    </div>`;
    chart.appendChild(row);
  });

  return chart;
}
