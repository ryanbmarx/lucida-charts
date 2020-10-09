import Highcharts from "highcharts";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import { initFrame } from "@newswire/frames";

function parseCSV(text) {
  const lines = text.split("\n");
  const headers = lines[0].replace(/\r/g, "").split(",");
  const retval = [];

  lines.splice(1).forEach((l) => {
    const row = l.split(",");
    const datum = {};
    datum[headers[0]] = new Date(row[0]).getTime();
    datum[headers[1]] = parseFloat(row[1]);
    datum[headers[2]] = parseFloat(row[2]);
    datum[headers[3]] = parseFloat(row[3]);
    retval.push(datum);
  });
  return retval;
}

const tooltip = {
  useHtml: true,
  formatter: function () {
    return `<small>${Highcharts.dateFormat("%B %e, %Y", this.x)}</small><br /><b>${this.series.legendItem.textStr}</b>:<br /> $${this.y}`;
  },
};


document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();

  fetch("climate-advisers-better.csv")
    .then((resp) => resp.text())
    .then((text) => parseCSV(text))
    .then((data) => {
      // THESE ARE CHART-SPECIFIC ITEMS
      const options = {
        chart: {
          type: "line",
        },
        xAxis: {
          type: "datetime",
          title: {
            text: "",
          },
        },
        yAxis: {
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
        tooltip: tooltip,
        series: [
          {
            data: data.map((d) => [d.date, d.idx]),
            name: "Climate Advisers Better Palm Oil TR Index",
            turboThreshold: data.length,
            lineColor: colors.blackCharcoal,
            color: colors.blackCharcoal,
            marker: {
              symbol: "circle",
            },
          },
          {
            data: data.map((d) => [d.date, d.nonrspo]),
            name: "Investible Non-RSPO Palm Oil TR*",
            turboThreshold: data.length,
            lineColor: colors.greenMoss,
            color: colors.greenMoss,
            marker: {
              symbol: "circle",
            },
          },
          {
            data: data.map((d) => [d.date, d.composite]),
            name: "Investible Composite Palm Oil TR*",
            turboThreshold: data.length,
            lineColor: colors.greenParakeet,
            color: colors.greenParakeet,
            marker: {
              symbol: "circle",
            },
          },
        ],
      };
      Highcharts.setOptions(lucidaChartTheme);
      const myChart = Highcharts.chart("container", options);
    });
});
