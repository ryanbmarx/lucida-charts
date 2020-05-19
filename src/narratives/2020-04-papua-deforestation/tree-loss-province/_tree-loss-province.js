import { initFrame } from "@newswire/frames";
import { csvParse } from "d3-dsv";
import { format } from "d3-format";
import Highcharts from "highcharts";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";

const pointFormatter = format(",");

const options = {
  chart: {
    type: "line",
  },
  plotOptions: {
    line: {
      states: { hover: { marker: { enabled: false } } },
      marker: {
        enabled: false,
        symbol: "circle",
      },
    },
  },

  tooltip: {
    // useHtml: true,
    shared: true,
    // formatter: function () {
    //   const total = pointFormatter(this.y);
    //   const d = Highcharts.dateFormat("%Y", this.x);
    //   const units = "hectares";
    //   const region = "P";
    //   console.log(this);

    //   let tooltip = `<p>${d}</p><br /><p><strong>${region}:</strong> ${total} ${units}</p>`;
    //   return tooltip;
    // },
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
};
function getData(data) {
  delete data["Province"];
  return Object.keys(data).map(k => {
    return [new Date(k, 0, 1).getTime(), parseInt(data[k])];
  });
}
document.addEventListener("DOMContentLoaded", function (e) {
  initFrame();

  const container = document.querySelector("#chart");
  fetch("tree-loss-province.csv")
    .then(resp => resp.text())
    .then(text => {
      return csvParse(text);
    })
    .then(data => {
      console.log(data);
      options.series = data.map(d => {
        return {
          name: d.Province,
          lineColor: colors.greenExtraLight,
          data: getData(d),
        };
      });
    })
    .then(() => {
      console.log(options);

      Highcharts.setOptions(lucidaChartTheme);
      const myChart = Highcharts.chart("container", options);
    })
    .catch(e => console.error(e));
});
