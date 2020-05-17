import { initFrame } from "@newswire/frames";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import { csvParse } from "d3-dsv";
import { format } from "d3-format";
import Highcharts from "highcharts";
import Treemap from "highcharts/modules/treemap";
import Heatmap from "highcharts/modules/heatmap";

Treemap(Highcharts);
Heatmap(Highcharts);

const pointFormatter = format(".2f");
// const moneyFormatter = function (v) {
//   return `${format("$.2f")(v / 1000000000)}B`;
// };
const options = {
  annotations: [
    {
      shapes: [
        {
          type: "path",
          points: [
            "0",
            "3",
            {
              x: 0,
              y: 7,
              xAxis: 0,
              yAxis: 0,
            },
          ],
          markerEnd: "arrow",
        },
      ],
    },
  ],

  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 0,
      groupPadding: 0.1,
      shadow: false,
    },
  },
  tooltip: {
    shared: true,
    useHTML: true,
    formatter: function () {
      const year = Highcharts.dateFormat("%Y", this.x);
      const lost = pointFormatter(this.y);
      return `${year}: <strong>${lost}M tons</strong>`;
    },
  },
  chart: {
    type: "column",
    spacingBottom: 0,
    spacingTop: 5,
    spacingLeft: 0,
    spacingRight: 0,
  },
  xAxis: {
    type: "datetime",
    title: {
      text: "",
    },
  },
  yAxis: {
    title: {
      text: "Millions of metric tons",
    },
    labels: {
      format: "{value}M",
    },
  },
  legend: { enabled: false },
  title: {
    text: "",
  },
  credits: {
    text: "",
  },
};

// Source: Resource Trade (via Michele)
// Total Chinese imports of Palm Oil in 2018: 6.4 million tons
const imports2018 = [
  { name: "From Indonesia", value: 4.6, colorValue: 4.6 },
  { name: "From Malaysia", value: 1.8, colorValue: 1.8 },
  { name: "All other sources (0.39M tons)", value: 0.39, colorValue: 0.39 },
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
      return `${this.key}: <strong>${this.point.value}M tons</strong>`;
    },
  },
  series: [
    {
      type: "treemap",
      layoutAlgorithm: "squarified",
      data: imports2018,
    },
  ],
};

function initCategoryChart() {
  Highcharts.setOptions(lucidaChartTheme);
  console.log(catOptions);
  const myChart = Highcharts.chart("china-categories", catOptions);
}

function initChinaImportsChart() {
  fetch("china-palm-oil-imports.csv")
    .then(resp => resp.text())
    .then(text => {
      return csvParse(text, function (d) {
        return {
          year: new Date(+d.year, 0, 1).getTime(),
          value: +d.value / 1000,
        };
      });
    })
    .then(data => data.sort((a, b) => a.year - b.year))
    .then(data => {
      options.series = [
        {
          data: data.map(d => {
            return [d.year, d.value];
          }),
          // name: "Hectares",
          turboThreshold: data.length,
          color: colors.greenLight,
        },
      ];
      Highcharts.setOptions(lucidaChartTheme);
      const myChart = Highcharts.chart("china-imports", options);
    })
    .catch(e => console.error(e));
}
document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();
  initCategoryChart();
  initChinaImportsChart();
});
