// alternating
// so want:
// group element
// > rects (alternating horiztonal/vertical)
// > mask (alternating horizontal/vertical)
//  > symbol element

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

for (let i = 0; i < 7; i++) {
  svg
    .append("g")
    .selectAll("rect")
    .data(d3.range(n))
    .join("rect")
    .attr("y", (d) => d * 20)
    .attr("width", width / 7)
    .attr("height", 10)
    .attr("mask", i % 2 == 0 ? "url(#mask)" : "url(#mask-inverse)")
    .attr("transform", `translate(${(width / 7) * i})`);

  svg
    .append("g")
    .selectAll("rect")
    .data(d3.range(width / 150))
    .join("rect")
    .attr("x", (d) => d * 20)
    .attr("width", 10)
    .attr("height", height)
    .attr("mask", i % 2 == 0 ? "url(#mask-inverse)" : "url(#mask)")
    .attr("transform", `translate(${(width / 7) * i})`);
}

const renderMask = (selection, id, inverted) => {
  const mask = selection.append("mask").attr("id", id);

  mask
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", inverted ? "white" : "black");

  mask
    .selectAll("g")
    .data(d3.range(d3.symbols.length))
    .join((enter) =>
      enter
        .append("g")
        .attr("transform", (d) => `translate(${d * 100},${height / 2})`)
        .append("path")
        .attr("d", (d) => d3.symbol(d3.symbols[d], 9000)())
        .attr("fill", inverted ? "black" : "white")
    );
};

svg.call(renderMask, "mask", false).call(renderMask, "mask-inverse", true);
