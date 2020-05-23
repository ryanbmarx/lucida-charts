import { initFrame } from "@newswire/frames";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import { format } from "d3-format";
import Highcharts from "highcharts";
import Treemap from "highcharts/modules/treemap";
import Heatmap from "highcharts/modules/heatmap";

Treemap(Highcharts);
Heatmap(Highcharts);

const moneyFormatter = function (v) {
  return `${format("$.2f")(v / 1000000000)}B`;
};

const catData = [
  {
    name: "Palm kernel & babassu oil, fractions, simply refined",
    value: 573874.527 * 1000,
    colorValue: 573874.527 * 1000,
  },
  {
    name: "Palm kernel or babassu oil, crude",
    value: 13547.9845 * 1000,
    colorValue: 13547.9845 * 1000,
  },
  {
    name: "Palm nut or kernel oil cake & other solid residues",
    value: 55220.2551 * 1000,
    colorValue: 55220.2551 * 1000,
  },
  {
    name: "Palm oil or fractions simply refined",
    value: 2177079.82 * 1000,
    colorValue: 2177079.82 * 1000,
  },
  {
    name: "Other",
    value: 399.74196 * 1000 + 399.996 * 1000,
    colorValue: 399.74196 * 1000 + 399.996 * 1000,
  },
  //   { name: "Palm oil, crude", value: 399.74196 * 1000 },
  //   { name: "Palm nuts & kernels", value: 399.996 * 1000 },
];

const catOptions = {
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
      return `${this.key}: <strong>${moneyFormatter(
        this.point.value
      )}</strong>`;
    },
  },
  series: [
    {
      type: "treemap",
      layoutAlgorithm: "squarified",
      data: catData,
    },
  ],
};

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  Highcharts.setOptions(lucidaChartTheme);
  const myChart = Highcharts.chart("china-categories", catOptions);
});
