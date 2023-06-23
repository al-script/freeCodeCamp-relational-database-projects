// DOM manipulation framework
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@6.6/+esm";

let container = document.getElementById("svg-container");

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select(container)
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const n = 100;
svg
  .append("g")
  .attr("class", "test")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#mask)");

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#mask-inverse)");

const mask = svg.append("mask").attr("id", "mask");

mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black");

mask
  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`)
  .append("path")
  .attr("d", d3.symbol(d3.symbols[1], (height * height) / 2)())
  .attr("fill", "white");

const maskInverse = svg.append("mask").attr("id", "mask-inverse");

maskInverse
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

maskInverse
.append("g")
.attr("transform", `translate(${width / 2},${height / 2})`)
.append("path")
.attr("d", d3.symbol(d3.symbols[1], (height * height) / 2)())
.attr("fill", "black");
