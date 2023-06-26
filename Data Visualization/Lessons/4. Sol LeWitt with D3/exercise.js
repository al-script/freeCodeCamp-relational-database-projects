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
svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width / 7)
  .attr("height", 10)
  .attr("mask", "url(#mask)")
  .attr("transform", `translate(${0})`);

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(width / 150))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#mask-inverse)")
  .attr("transform", `translate(${0})`);

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
        .attr("transform", (d) => `translate(${width / 15},${height / 2})`)
        .append("path")
        .attr("d", (d) => d3.symbol(d3.symbols[0], 5000)())
        .attr("fill", inverted ? "black" : "white")
    );
};

svg.call(renderMask, "mask", false).call(renderMask, "mask-inverse", true);

// setup so can render a single 1/7 slice
// and then dynamically change and render:
//  the symbol within the slice, the vertical/horizontal bars (using mask), the translation of the slice

// encapsulate the creation of one slice in a function, then iterate over it for each symbol,
// or perhaps allow to call it using the inversion and symbol

// svg
//   .selectAll("g")
//   .data(d3.range(d3.symbols.length))
//   .join((enter) =>
//     enter
//       .append("g")
//       .attr("transform", (d) => `translate(${(width / 7) * d})`)
//       .selectAll("rect")
//       .data(d3.range(n))
//       .join("rect")
//       .attr("y", (d) => d * 20)
//       .attr("width", width / 7)
//       .attr("height", 10)
//   );
