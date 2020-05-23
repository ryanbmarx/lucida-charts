import { initFrame } from "@newswire/frames";
import { csvParse } from "d3-dsv";
import Highcharts from "highcharts";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";

const tooltip = {
  xDateFormat: "%Y",
  valueSuffix: " hectares",
};

const options = {
  chart: {
    type: "line",
  },
  plotOptions: {},
  tooltip: tooltip,
  yAxis: {
    labels: {
      useHtml: true,
      formatter: function (e) {
        return `${Highcharts.numberFormat(this.value / 1000, 0, null, ",")}K`;
      },
    },
    title: {
      text: "Metric tons",
    },
  },
  xAxis: {
    type: "datetime",
    title: {
      text: "",
    },
  },
};

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();

  const container = document.querySelector("#chart");
  fetch("forest-loss-region.csv")
    .then(resp => resp.text())
    .then(text => {
      return csvParse(text);
    })
    .then(data => {
      options.series = data.map(r => {
        const province = r.Region;
        delete r.Region;
        return {
          color:
            province.toLowerCase().indexOf("papua") > -1
              ? colors.blackCharcoal
              : colors.greenExtraLight,
          name: province,
          data: Object.keys(r).map(key => [
            new Date(key, 0, 1).getTime(),
            parseInt(r[key]),
          ]),
        };
      });
    })
    .then(() => {
      Highcharts.setOptions(lucidaChartTheme);
      const myChart = Highcharts.chart("container", options);
    })
    .catch(e => console.error(e));
});
