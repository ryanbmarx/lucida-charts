import Highcharts from "highcharts";
import { lucidaChartTheme } from "../../../theme/lucida-chart-theme";
import { colors } from "../../../theme/lucida-colors";
import { csvParse } from "d3-dsv";
import { format } from "d3-format";

const pointFormatter = format(",.2f");
// THESE ARE CHART-SPECIFIC ITEMS
const options = {
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
      return `${year}: <strong>${lost} ha</strong>`;
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

export function initChart() {
  fetch("treecover_loss_in_primary_forests_2001_tropics_only__ha.csv")
    .then((resp) => resp.text())
    .then((text) => {
      return csvParse(text, function (d) {
        return {
          year: new Date(+d.treecover_loss__year, 0, 1).getTime(),
          aboveground_biomass_loss__Mg: +d.aboveground_biomass_loss__Mg,
          treecover_loss__ha: +d.treecover_loss__ha,
          aboveground_co2_emissions__Mg: +d.aboveground_co2_emissions__Mg,
        };
      });
    })
    .then((data) => {
      options.series = [
        {
          data: data.map((d) => {
            return [d.year, d.treecover_loss__ha];
          }),
          name: "Hectares",
          turboThreshold: data.length,
          color: colors.greenLight,
        },
      ];
      Highcharts.setOptions(lucidaChartTheme);
      const myChart = Highcharts.chart("chart", options);
    });
}

/**
 * 
 * plotOptions: {
    column: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0,
        shadow: false
    }
}
 */
