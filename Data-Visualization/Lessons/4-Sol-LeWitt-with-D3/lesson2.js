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

const renderMask = (selection, id, inverted) => {
  const mask = selection.append("mask").attr("id", id);

  mask
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", inverted ? "white" : "black");

  // const g = mask
  //   .append("g")
  //   .attr("transform", );

  // get the paths then set the attributes
  // selecting our mask, prepping for group elements, then performing 7 operations, and for each operation adding a group and a path within the group to the mask with the specified attributes
  // passing a function to .join, which is invoked with the enter selection performed on the data join, and since dont have any g elements already are then triggering append g for each element in the array
  // results in 8 group elements each with a path in it
  // using join enter because want to perform multiple nested element creation operations, where g is the parent yet where want to create a nested element within g, and where g does not already exist
  // enter is used because there is no corresponding g element already for a given data element
  mask
    .selectAll("g")
    .data(d3.range(d3.symbols.length))
    .join((enter) =>
      enter
        .append("g")
        .attr("transform", (d) => `translate(${d * 185 + 100},${height / 2})`)
        .append("path")
        .attr("d", (d) => d3.symbol(d3.symbols[d], 11100)())
        .attr("fill", inverted ? "black" : "white")
    );

  // .append("path")
  // .attr("d", d3.symbol(d3.symbols[1], (height * height) / 2)())
  // .attr("fill", inverted ? "black" : "white");
};

// renderMask(svg, "mask", false);
// renderMask(svg, "mask-inverse", true);

svg.call(renderMask, "mask", false).call(renderMask, "mask-inverse", true);
