import Highcharts from "highcharts";
import Treemap from "highcharts/modules/treemap";
import Heatmap from "highcharts/modules/heatmap";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import { format } from "d3-format";
import { initFrame } from "@newswire/frames";

Treemap(Highcharts);
Heatmap(Highcharts);

const data = [
  { name: "Bank of China", value: 98.58690241, colorValue: 98.58690241 },
  { name: "Bank of East Asia", value: 11.88956667, colorValue: 11.88956667 },
  {
    name: "China Construction Bank",
    value: 24.98640068,
    colorValue: 24.98640068,
  },
  { name: "China Development Bank", value: 260, colorValue: 260 },
  {
    name: "Industrial and Commercial Bank of China",
    value: 113.1709723,
    colorValue: 113.1709723,
  },
];

const f = format("$.2f");

const options = {
  chart: { margin: 0 },
  colorAxis: {
    minColor: colors.greenExtraLight,
    maxColor: colors.greenLight,
  },
  legend: { enabled: false },
  title: {
    text: "",
  },
  credits: {
    text: "",
  },
  tooltip: {
    shared: true,
    useHTML: true,
    formatter: function () {
      return `${this.key}: <strong>${f(this.point.value)}M</strong>`;
    },
  },
  series: [
    {
      type: "treemap",
      layoutAlgorithm: "squarified",
      data: data,
    },
  ],
};

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  Highcharts.setOptions(lucidaChartTheme);
  const myChart = Highcharts.chart("china-financiers", options);
});
