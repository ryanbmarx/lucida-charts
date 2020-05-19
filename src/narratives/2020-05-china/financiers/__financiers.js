// import Highcharts from "highcharts";
// import More from "highcharts/highcharts-more";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import { format } from "d3-format";
import { initFrame } from "@newswire/frames";
import { sidebar } from "../../../utils/sidebar";

// More(Highcharts);

const data = [
  { label: "Bank of China", value: 98.58690241 },
  { label: "Bank of East Asia", value: 11.88956667 },
  { label: "China Construction Bank", value: 24.98640068 },
  { label: "China Development Bank", value: 260, color: colors.greenLight },
  {
    label: "Industrial and Commercial Bank of China",
    value: 113.1709723,
  },
];

const f = v => {
  return `${format("$.2f")(v)}M`;
};

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  console.log("harpo");
  // Highcharts.setOptions(lucidaChartTheme);
  // const myChart = Highcharts.chart("china-financiers", options);

  data.sort((a, b) => b.value - a.value);
  document
    .querySelector("#china-financiers")
    .appendChild(sidebar(data, null, f));
});
