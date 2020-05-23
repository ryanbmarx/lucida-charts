import { colors } from "./lucida-colors.js";

// THIS IS THE "UNIVERSAL" CHART THEME

const colorText = colors.blackPrimary;

export const lucidaChartTheme = {
  lang: {
    thousandsSep: ",",
  },
  chart: {
    backgroundColor: "transparent",
    style: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      color: colorText,
    },
  },
  plotOptions: {
    column: {
      stacking: "normal",
      pointPadding: 0,
      borderWidth: 0,
      groupPadding: 0.1,
      shadow: false,
    },
    line: {
      states: { hover: { marker: { enabled: false } } },
      marker: {
        enabled: false,
        symbol: "circle",
      },
    },
  },
  title: {
    text: "",
    align: "left",
    style: {
      fontWeight: "bold",
    },
  },
  subtitle: {
    text: "",
    align: "left",
    style: {
      color: colorText,
    },
  },
  credits: {
    text: "",
  },
  legend: {
    layout: "horizontal",
  },
  xAxis: {
    gridLineColor: colors.white,
    lineColor: colors.white,
    tickColor: colors.white,
    title: {
      text: "",
      style: {
        color: colorText,
      },
    },
  },
  yAxis: {
    gridLineColor: colors.white,
    lineColor: colors.white,
    tickColor: colors.white,
    title: {
      style: { color: colorText },
      text: "",
    },
  },
  credits: {
    position: {
      align: "left",
      x: 0,
      y: 0,
    },
    style: {
      color: colorText,
      fontSize: "13px",
    },
  },
};
