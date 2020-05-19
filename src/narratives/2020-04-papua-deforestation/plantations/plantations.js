import { initFrame } from "@newswire/frames";
import Highcharts from "highcharts";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import { csvParse } from "d3-dsv";
import { format } from "d3-format";

const pointFormatter = format(",.2f");

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Map DOMContent is loaded");
  initFrame();

  // THESE ARE CHART-SPECIFIC ITEMS
  const options = {
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
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function () {
        const total = pointFormatter(this.points[0].total);
        let tooltip = `<table style="width: 300px;"><tr><td>${Highcharts.dateFormat(
          "%Y",
          this.x
        )}</td></tr>`;
        for (let i = 0; i < this.points.length; i++) {
          const p = this.points[i];
          console.log(p.y, total);
          tooltip += `<tr>
          <td><span style="background-color:${
            p.series.color
          };"class="legend__dot"></span>${p.series.name}</td>
          <td>${pointFormatter(p.y)} ha</td></tr>`;
        }
        tooltip += `<tr><td><strong>Total</strong></td><td><strong>${total} ha</strong></td></tr></table>`;
        return tooltip;
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
        text: "Hectares",
      },
    },
    title: {
      text: "",
    },
    credits: {
      text: "",
    },
  };

  fetch("treecover_loss__ha.csv")
    .then(resp => resp.text())
    .then(text => {
      return csvParse(text, function (d) {
        return {
          year: new Date(+d.year, 0, 1).getTime(),
          total: +d.total,
          plantation: +d.plantation,
          natural: +d.natural,
        };
      });
    })
    .then(data => {
      options.series = [
        {
          data: data.map(d => {
            return [d.year, d.plantation];
          }),
          name: "Plantation tree cover",
          turboThreshold: data.length,
          color: colors.greenLight,
        },
        {
          data: data.map(d => {
            return [d.year, d.natural];
          }),
          name: "Natural tree cover",
          turboThreshold: data.length,
          color: colors.gold,
        },
      ];
      Highcharts.setOptions(lucidaChartTheme);
      const myChart = Highcharts.chart("chart", options);
    });
});
