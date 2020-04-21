import { getMax } from "./utils/get-max.js";
import { format } from "./utils/format.js";
import { sidebar } from "./utils/sidebar";

document.addEventListener("DOMContentLoaded", function (e) {
  const data = [
    { label: "BlackRock", value: 1533193730.0 },
    { label: "Vanguard", value: 1226957752.0 },
    { label: "T Rowe Price", value: 997936456.0 },
    { label: "Prudential", value: 489894079.0 },
    { label: "State Street", value: 472404363.0 },
    { label: "Franklin Resources", value: 449563103.0 },
    { label: "JPMorgan Chase", value: 419029039.0 },
    { label: "Credit Agricole", value: 373128863.0 },
    { label: "Invesco", value: 284098567.0 },
    { label: "AllianceBernstein", value: 272906004 },
  ];
  const container = document.querySelector("#deforest-container");
  const max = getMax(data, "value");
  data.sort((a, b) => b.value - a.value);

  container.appendChild(sidebar(data));
});
