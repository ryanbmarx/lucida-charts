import { initFrame } from "@newswire/frames";
import { csvParse } from "d3-dsv";
import { format } from "d3-format";
import Highcharts from "highcharts";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";

const tooltip = {
  shared: true,
  xDateFormat: "%Y",
  valueSuffix: " hectares",
  pointFormat:
    "<span style='color:{point.color}'>● </span><b>{series.name}:</b> {point.y}<br />",
};

const options = {
  chart: {
    type: "column",
  },

  tooltip: tooltip,
  xAxis: {
    type: "datetime",
  },
  yAxis: {
    labels: {
      formatter: function () {
        return Highcharts.numberFormat(this.value, 0, "", ",");
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();

  fetch("tree-cover-loss-papua-and-barat.csv")
    .then(resp => resp.text())
    .then(text => csvParse(text))
    .then(data => {
      options.series = data.map(region => {
        const province = region.Province;
        delete region.Province;

        return {
          color:
            province === "Papua" ? colors.greenExtraLight : colors.greenLight,
          name: province,
          data: Object.keys(region).map(key => [
            new Date(key, 0, 1).getTime(),
            parseInt(region[key]),
          ]),
        };
      });
    })
    .then(() => {
      Highcharts.setOptions(lucidaChartTheme);
      Highcharts.chart("container", options);
    })
    .catch(e => console.error(e));
});
