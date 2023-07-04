import * as d3 from "https://cdn.jsdelivr.net/npm/d3@6.6/+esm";
import { vizData } from "./exercise_vizData.js";
import { makeData } from "./exercise_makeData.js";

let container = document.getElementById("svg-container");

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select(container)
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let t = 0;

setInterval(() => {
  const n = width / 50;
  const data = makeData(n, t);
  svg.call(vizData, data); // svg is first element sent to the call, function setup to expect the svg element as first argument, and other arguements that pass are already setup presumably
  // vizData(svg, data);
  t = t + 0.005;
}, 1000 / 120);
