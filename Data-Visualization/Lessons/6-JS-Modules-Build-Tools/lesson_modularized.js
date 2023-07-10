import * as d3 from "https://cdn.jsdelivr.net/npm/d3@6.6/+esm";
import { vizData } from "./lesson_vizData.js";
import { makeData } from "./lesson_makeData.js";

let container = document.getElementById("svg-container");

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select(container)
  .append("svg")
  .attr("width", width)
  .attr("height", height);
