// DOM manipulation framework
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@6.6/+esm";

let container = document.getElementById("svg-container");

const width = window.innerWidth;
const height = window.innerHeight;

// const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// svg.setAttribute("width", width);
// svg.setAttribute("height", height);
// container.appendChild(svg);

// can now use d3 methods on svg
const svg = d3
  .select(container)
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// // apply inverse mask such that center (white) is visible, and rest (black) is hidden
// for (let i = 0; i < n; i++) {
//   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//   rect.setAttribute("y", i * 20);
//   rect.setAttribute("width", width);
//   rect.setAttribute("height", 10);
//   rect.setAttribute("mask", "url(#circle-mask");
//   svg.appendChild(rect);
// }

// // create data
// const n = 100;
// const marks = [];
// for (let i = 0; i < n; i++) {
//   marks.push({
//     y: i * 20,
//     width: width,
//     height: 10,
//     mask: "url(#circle-mask)",
//   });
// }

// // render data
// // select all rects (that dont exist yet) and create rect for each mark per the passed in array
// // join data to a rect
// // and set attributes
// svg
//   .selectAll("rect")
//   .data(marks)
//   .join("rect")
//   .attr("y", (d) => d.y)
//   .attr("width", (d) => d.width)
//   .attr("height", (d) => d.height)
//   .attr("mask", (d) => d.mask);

// create and render data
// attr accepts both constants and functions, func passes in the object from array to play with
// const n = 100;
// svg
//   .selectAll("rect.horizontal")
//   .data(d3.range(n))
//   .join("rect")
//   .attr("y", (d) => d * 20)
//   .attr("width", width)
//   .attr("height", 10)
//   .attr('class', 'horizontal')
//   .attr("mask", "url(#circle-mask)");

// svg
//   .selectAll("rect.vertical")
//   .data(d3.range(n))
//   .join("rect")
//   .attr("x", (d) => d * 20)
//   .attr("width", 10)
//   .attr("height", height)
//   .attr("class", 'vertical')
//   .attr("mask", "url(#circle-mask-inverse)");

const n = 100;
svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#circle-mask)");

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#circle-mask-inverse)");

// const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
// mask.setAttribute("id", "circle-mask");
// svg.appendChild(mask);

// black show, white hide, arranged such that can have inverse masking to allow for two elements to have different masking criteria

const mask = svg.append("mask").attr("id", "circle-mask");

// // when mask applied, are only seeing what is defined within the mask
// // black invisible
// // white visible
// // mask rect creates an inverse mask

// //black, allows invisibility for the masked areas (in this case, everything within a circle, if area falls under rectangle, is invisible)
// const maskRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
// maskRect.setAttribute("width", width);
// maskRect.setAttribute("height", height);
// maskRect.setAttribute("fill", "black");
// mask.appendChild(maskRect);

mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black");

// // white, allows visibility for the unmasked areas, if area falls under white is visible
// const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// circle.setAttribute("cx", width / 2);
// circle.setAttribute("cy", height / 2);
// circle.setAttribute("r", 200);
// circle.setAttribute("fill", "white");
// mask.appendChild(circle);

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "white");

// const maskInverse = document.createElementNS("http://www.w3.org/2000/svg", "mask");
// maskInverse.setAttribute("id", "circle-mask-inverse");
// svg.appendChild(maskInverse);

const maskInverse = svg.append("mask").attr("id", "circle-mask-inverse");

// const maskRectInverse = document.createElementNS("http://www.w3.org/2000/svg", "rect");
// maskRectInverse.setAttribute("width", width);
// maskRectInverse.setAttribute("height", height);
// maskRectInverse.setAttribute("fill", "white");
// maskInverse.appendChild(maskRectInverse);

maskInverse
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

// const circleInverse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// circleInverse.setAttribute("cx", width / 2);
// circleInverse.setAttribute("cy", height / 2);
// circleInverse.setAttribute("r", 200);
// circleInverse.setAttribute("fill", "black");
// maskInverse.appendChild(circleInverse);

maskInverse
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "black");

// // apply inverse mask such that center (black) is hidden, and rest (white) is visible
// const n = 100;
// for (let i = 0; i < n; i++) {
//   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//   rect.setAttribute("x", i*20);
//   // rect.setAttribute("width", i/2);
//   rect.setAttribute("width", 10);
//   rect.setAttribute("height", height);
//   rect.setAttribute("mask", "url(#circle-mask-inverse)";
//   svg.appendChild(rect);
// }
