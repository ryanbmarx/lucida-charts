import { colors } from "./lucida-colors.js";

// THIS IS THE "UNIVERSAL" CHART THEME

const colorText = colors.blackPrimary;

export const lucidaChartTheme = {
  chart: {
    backgroundColor: "transparent",
    style: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      color: colorText,
    },
  },
  title: {
    align: "left",
    style: {
      fontWeight: "bold",
    },
  },
  subtitle: {
    align: "left",
    style: {
      color: colorText,
    },
  },
  legend: {
    layout: "horizontal",
  },
  xAxis: {
    gridLineColor: colors.white,
    lineColor: colors.white,
    tickColor: colors.white,
    title: {
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
