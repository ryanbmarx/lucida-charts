import { colors } from "./lucida-colors.js";

// THIS IS THE "UNIVERSAL" CHART THEME

export const lucidaChartTheme = {
  chart: {
    backgroundColor: "transparent",
    style: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      color: colors.textMain
    }
  },
  title: {
    align: "left",
    style: {
      fontWeight: "bold"
    }
  },
  subtitle: {
    align: "left",
    style: {
      color: colors.textLight
    }
  },
  legend: {
    layout: "horizontal"
  },
  xAxis: {
    gridLineColor: colors.white,
    lineColor: colors.white,
    tickColor: colors.white,
    title: {
      style: {
        color: colors.textLight
      }
    }
  },
  yAxis: {
    gridLineColor: colors.white,
    lineColor: colors.white,
    tickColor: colors.white,
    title: {
      style: { color: colors.textLight }
    }
  },
  credits: {
    position: {
      align: "left",
      x: 0,
      y: 0
    },
    style: {
      color: colors.textLight,
      fontSize: "13px"
    }
  }
};
