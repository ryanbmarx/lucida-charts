import * as d3 from "d3";
import "d3-tip";
import { initFrame } from "@newswire/frames";

const palmOilData = [
  {
    Year: 1979,
    Production: 2,
  },
  {
    Year: 1980,
    Production: 6,
  },
  {
    Year: 1981,
    Production: 6,
  },
  {
    Year: 1982,
    Production: 6,
  },
  {
    Year: 1983,
    Production: 7,
  },
  {
    Year: 1984,
    Production: 8,
  },
  {
    Year: 1985,
    Production: 5,
  },
  {
    Year: 1986,
    Production: 5,
  },
  {
    Year: 1987,
    Production: 11,
  },
  {
    Year: 1988,
    Production: 10,
  },
  {
    Year: 1989,
    Production: 13,
  },
  {
    Year: 1990,
    Production: 12,
  },
  {
    Year: 1991,
    Production: 11,
  },
  {
    Year: 1992,
    Production: 10,
  },
  {
    Year: 1993,
    Production: 13,
  },
  {
    Year: 1994,
    Production: 15,
  },
  {
    Year: 1995,
    Production: 13,
  },
  {
    Year: 1996,
    Production: 13,
  },
  {
    Year: 1997,
    Production: 14,
  },
  {
    Year: 1998,
    Production: 17,
  },
  {
    Year: 1999,
    Production: 20,
  },
  {
    Year: 2000,
    Production: 28,
  },
  {
    Year: 2001,
    Production: 35,
  },
  {
    Year: 2002,
    Production: 30,
  },
  {
    Year: 2003,
    Production: 36,
  },
  {
    Year: 2004,
    Production: 42,
  },
  {
    Year: 2005,
    Production: 40,
  },
  {
    Year: 2006,
    Production: 47,
  },
  {
    Year: 2007,
    Production: 48,
  },
  {
    Year: 2008,
    Production: 53,
  },
  {
    Year: 2009,
    Production: 54,
  },
  {
    Year: 2010,
    Production: 58,
  },
  {
    Year: 2011,
    Production: 72,
  },
  {
    Year: 2012,
    Production: 104,
  },
  {
    Year: 2013,
    Production: 113,
  },
  {
    Year: 2014,
    Production: 124,
  },
  {
    Year: 2015,
    Production: 142,
  },
  {
    Year: 2016,
    Production: 156,
  },
  {
    Year: 2017,
    Production: 160,
  },
  {
    Year: 2018,
    Production: 188,
  },
  {
    Year: 2019,
    Production: 190,
  },
  {
    Year: 2020,
    Production: 205,
  },
];

const margin = { top: 50, right: 20, bottom: 0, left: 20 },
  width = 700 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

const y = d3.scaleLinear().domain([0, 230]).range([0, height]);

const x = d3.scaleLinear().domain([1979, 2020]).range([0, width]);

window.addEventListener("DOMContentLoaded", function (e) {
  console.log("Dom Content Loaded");
  initFrame();

  const svg = d3
    .select(".container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g");

  // var tool_tip = d3
  //   .tip()
  //   .attr("class", "d3-tip")
  //   .offset([-8, 0])
  //   .html(function (d) {
  //     return `Year: ${d.Year} <br/> Production: ${d.Production}t`;
  //   });
  // svg.call(tool_tip);

  const barWidth = (width / palmOilData.length) * 0.95;

  const testdata = [25, 50, 75, 100, 125, 150, 175, 200];
  svg
    .append("g")
    .selectAll(".lines")
    .data(testdata)
    .enter()
    .append("line")
    .attr("x1", (d, i) => 0 + i * 65)
    .attr("y1", d => height - y(d))
    .attr("x2", width + 10)
    .attr("y2", d => height - y(d))
    .attr("stroke-width", 0.5)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");

  svg
    .append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(testdata)
    .enter()
    .append("text")
    .attr("x", (d, i) => 0 + i * 65)
    .attr("y", d => height - y(d) - 2)
    .text(function (d) {
      return d;
    });

  svg
    .append("g")
    .attr("class", "labels")
    .append("text")
    .attr("x", 50)
    .attr("y", 150)
    .text("Production in 1,000 metric tons");

  svg
    .append("g")
    .attr("class", "full")
    .selectAll(".bar")
    .data(palmOilData)
    .enter()
    .append("rect")
    .attr("x", d => x(+d.Year))
    .attr("height", d => y(+d.Production))
    .attr("width", barWidth)
    .attr("transform", d => `translate(0,${height - y(+d.Production)})`)
    .on("mouseover", tool_tip.show)
    .on("mouseout", tool_tip.hide);

  svg
    .append("g")
    .attr("class", "small")
    .selectAll(".bar")
    .data(palmOilData)
    .enter()
    .append("rect")
    .attr("x", d => x(+d.Year))
    .attr("height", d => y(+d.Production))
    .attr("width", barWidth)
    .attr("transform", d => `translate(0,${height - y(+d.Production)})`)
    .on("mousemove", toolTipHover)
    .on("mouseout", function () {
      d3.select(this).style("fill", "");
      d3.select(".test").html("");
    });
  function toolTipHover(d) {
    d3.select(this).style("fill", "#333");
    d3.select(".test").html(
      `<p>Year: ${d.Year}<br/> Production: ${d.Production}t</p>`
    );
  }

  const xAxis = d3.axisBottom(x).tickFormat(d3.format("d"));
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .style("text-anchor", "middle");
});
