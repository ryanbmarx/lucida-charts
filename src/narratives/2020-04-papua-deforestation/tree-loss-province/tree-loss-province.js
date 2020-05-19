import { initFrame } from "@newswire/frames";
import { csvParse } from "d3-dsv";
import { format } from "d3-format";
import Highcharts from "highcharts";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";

const pointFormatter = format(",");

const options = {
  chart: {
    type: "column",
  },

  tooltip: {
    shared: true,
    useHTML: true,
    formatter: function () {
      return `${this.points[0].key}: <strong>${Highcharts.numberFormat(
        this.y,
        0,
        null,
        ","
      )} hectares</strong>`;
    },
  },
  xAxis: {
    title: {
      text: "",
    },
    type: "category",
    labels: {
      rotation: -45,
      style: {
        fontSize: "13px",
      },
    },
  },
  yAxis: {
    labels: {
      formatter: function () {
        return Highcharts.numberFormat(this.value, 0, "", ",");
      },
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
  series: {
    // dataLabels: {
    //   enabled: true,
    //   rotation: -90,
    //   color: "#FFFFFF",
    //   align: "right",
    //   format: "{point.y:.1f}", // one decimal
    //   y: 10, // 10 pixels down from the top
    //   style: {
    //     fontSize: "13px",
    //     fontFamily: "Verdana, sans-serif",
    //   },
    // },
  },
};
// function getData(data) {
//   delete data["Province"];
//   return Object.keys(data).map(k => {
//     return [new Date(k, 0, 1).getTime(), parseInt(data[k])];
//   });
// }
document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();

  fetch("tree-loss-province.csv")
    .then(resp => resp.text())
    .then(text => {
      let data = csvParse(text);
      let keys = Object.keys(data[0]);
      return keys.map(k => [k, parseInt(data[0][k])]);
    })
    .then(data => {
      data.sort((a, b) => a[1] - b[1]);
      options.series = [
        {
          name: "Tree loss in 2018",
          data: data,
          color: colors.greenLight,
        },
      ];
    })
    .then(() => {
      console.log(options);
      Highcharts.setOptions(lucidaChartTheme);
      Highcharts.chart("container", options);
    })
    .catch(e => console.error(e));
});
