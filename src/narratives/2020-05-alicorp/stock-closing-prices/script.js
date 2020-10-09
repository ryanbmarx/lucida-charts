import Highcharts from "highcharts";
import Annotations from "highcharts/modules/annotations";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import data from "./data.json";
import { initFrame } from "@newswire/frames";


Annotations(Highcharts);

let isDesktop = window.matchMedia('(min-width: 767px)').matches;

const annotations = [
  {
    labelOptions: {
      backgroundColor: colors.greenLight,
      borderWidth: 2,
      borderColor: colors.greenLight,
      verticalAlign: "top",
      y: 15,
      padding: 8,
      shape: "connector",
      align: "right",
      justify: false,
      crop: true,
      style: {
        fontSize: "14px",
        textOutline: "1px white",
      },
    },
    labels: [
      {
        point: {
          x: 1558069200000,
          y: 3.045,
          xAxis: 0,
          yAxis: 0,
        },
        y: 50,
        x: isDesktop ? 0 : -60,
        text: "<b>May 17, 2019</b>:<br>RSPO accepts<br>complaint",
      },
      {
        point: {
          x: 1583388000000,
          y: 2.5491,
          xAxis: 0,
          yAxis: 0,
        },
        align: "right",
        y: 120,
        // x: 30,

        text: "<b>March 5, 2020:</b><br>NIBM sells $12.3 million<br>in shares",
      },
      {
        point: {
          x: 1566536400000,
          xAxis: 0,
          y: 2.7405,
          yAxis: 0,
        },
        align: "left",
        y: -140,
        text:
          "<b>Aug. 23, 2019:</b><br>Complaint filed<br>with European investors",
      },
    ],
  },
];

const tooltip = {
  useHtml: true,
  formatter: function () {
    return `<b>${Highcharts.dateFormat("%B %e, %Y", this.x)}</b>: $${this.y}`;
  },
};

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();

  // THESE ARE CHART-SPECIFIC ITEMS
  const options = {
    chart: {
      type: "line",
    },
    tooltip: tooltip,
    xAxis: {
      type: "datetime",
      title: {
        text: "",
      },
    },
    yAxis: {
      labels: {
        format: "${value:.2f}",
      },
      title: {
        text: "",
      },
    },
    title: {
      text: "",
    },
    credits: {
      text: "",
    },
    annotations: annotations,
    series: [
      {
        data: data.map(d => {
          return [new Date(d.date).getTime(), d.closing];
        }),
        name: "Alicorp stock price",
        turboThreshold: data.length,
        lineColor: colors.blackCharcoal,
        color: colors.blackCharcoal,
        marker: {
          symbol: "circle",
        },
      },
    ],
  };
  Highcharts.setOptions(lucidaChartTheme);
  const myChart = Highcharts.chart("container", options);
});
