import Highcharts from "highcharts";
import More from "highcharts/highcharts-more";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import { format } from "d3-format";
import { initFrame } from "@newswire/frames";

const data = [
  { name: "Bank of China", value: 98.58690241 },
  { name: "Bank of East Asia", value: 11.88956667 },
  { name: "China Construction Bank", value: 24.98640068 },
  { name: "China Development Bank", value: 260, color: colors.greenLight },
  {
    name: "Industrial and Commercial Bank of China",
    value: 113.1709723,
  },
];

const f = format("$.2f");

const options = {
  chart: {
    type: "packedbubble",
    height: "100%",
  },
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
  legend: { enable: false },
  plotOptions: {
    packedbubble: {
      showInLegend: false,
      legend: { enabled: false },
      color: colors.greenExtraLight,
      useSimulation: false,
      minSize: "10%",
      maxSize: "120%",
      zMin: 0,
      zMax: 1000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0,
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 25,
        },
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "normal",
        },
      },
    },
  },
  series: [
    {
      name: "Financiers",
      data: data,
    },
  ],
};
document.addEventListener("DOMContentLoaded", function (e) {
  More(Highcharts);

  initFrame();

  Highcharts.setOptions(lucidaChartTheme);
  const myChart = Highcharts.chart("china-financiers", options);
});
