import Highcharts from "highcharts";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import data from "./data.json";
import { initFrame } from "@newswire/frames";

const tooltip = {
  useHtml: true,
  formatter: function () {
    return `<b>${Highcharts.dateFormat(
      "%Y",
      this.x
    )}</b>: ${Highcharts.numberFormat(this.y, 0, null, ",")} metric tons`;
  },
};

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  // THESE ARE CHART-SPECIFIC ITEMS
  const options = {
    chart: {
      type: "column",
      spacingBottom: 0,
      spacingTop: 5,
      spacingLeft: 0,
      spacingRight: 0,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
        },
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0.1,
        shadow: false,
      },
    },
    legend: { enabled: false },
    tooltip: tooltip,
    xAxis: {
      type: "datetime",
      title: {
        text: "",
      },
    },
    yAxis: {
      labels: {
        useHtml: true,
        formatter: function (e) {
          return `${this.value / 1000}K`;
        },
      },
      title: {
        text: "Metric tons",
      },
    },
    title: {
      text: "",
    },
    credits: {
      text: "",
    },
    // annotations: annotations,
    series: [
      {
        data: data.map(d => {
          return [new Date(d.year, 0, 1).getTime(), d.production * 1000];
        }),
        name: "Palm oil production",
        turboThreshold: data.length,
        color: colors.greenLight,
      },
    ],
  };
  Highcharts.setOptions(lucidaChartTheme);
  const myChart = Highcharts.chart("container", options);
});
