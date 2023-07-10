import * as d3 from "https://cdn.jsdelivr.net/npm/d3@6.6/+esm";

let container = document.getElementById("svg-container");

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select(container)
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// let data = d3.range(15);

// select all circles that exist within the svg (zero at the start)
// have created a data join by calling data: are 3 parts, enter update exit
// if data in array that does not have a corresponding dom element, that is the enter selection
// can use that to append new circles for all data elements for which are no circles yet
// creates data join, accesses enter function and appends circles ***
// cx = center x
// but this data is too tightly coupled to the rendering, better to compute it once and then access it
// otherwise get into trouble when reusing the data
// svg
//   .selectAll("circle")
//   .data(data)
//   .enter()
//   .append("circle")
//   .attr("r", 20)
//   .attr("cx", (d) => (d * width) / 15 + 25)
//   .attr("cy", (d) => 250 + Math.sin(d * 0.5) * 200);

// de-couple data from rendering
// recomputes every set interval: 1000 is 1s
// enter only triggers when no corresponding elements, and want to append (are there things can do other than append?)
// update runs when already is a dom element, and want to change it
let t = 0;
setInterval(() => {
  // defining our data
  // n is basically saying sometimes only 10 elements and sometimes more than 10 elements, and those more than 10 that have a DOM element but do not have a data point associated with them can be removed with exit
  const n = 10 + Math.sin(t) * 5;
  const data = d3.range(n).map((d) => ({
    x: (d * width) / 15 + 25,
    y: 250 + Math.sin(d * 0.5 + t) * 200,
    r: 20 + Math.sin(d * 0.5 + t * 2) * 10,
  }));

  // // initializing our data join
  // const circles = svg.selectAll("circle").data(data);

  // // appending circles via enter, separated because only called where corresponding DOM element doesnt already exist, gives the circles their initial value
  // const circlesEnter = circles.enter().append("circle").attr("r", 20);

  // // automatically calls update, calls the current value of d.x and d.y which is updated based on the interval and t
  // // *** USING MERGE: first time around will be enter selection with new circles and apply attrs to those, second time around will resolve to circles from update selection, very cool
  // circles
  //   .merge(circlesEnter)
  //   .attr("cx", (d) => d.x)
  //   .attr("cy", (d) => d.y);
  // // merge is a method on a selection where can pass in another selection and can merge selections together, a set union

  // // EXIT is where DOM elements still exist but dont have data elements associated with them
  // // exit can be used to remove those
  // // D3 knows which data point belongs to which circle, associates DOM elements to data elements

  // circles.exit().remove();

  // NEW shorthand, just use join! automatically merges the enter and update selections (and removes elements in exit selection)
  // shorthand for the entire general update pattern: enter, update, exit
  const circles = svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("r", (d) => d.r)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y);

  t = t + 0.005;
  // 1000/120 gives 120 frames per second
}, 1000 / 120);

// could abstract into functions and then call the functions within the setinterval
t = 0;
function makeData(n, t) {
  const data = d3.range(n).map((d) => ({
    x: (d * width) / 15 + 25,
    y: 250 + Math.sin(d * 0.5 + t) * 200,
    r: 20 + Math.sin(d * 0.5 + t * 2) * 10,
  }));
  return data;
}

function vizData(data) {
  const circles = svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("r", (d) => d.r)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y);
}

setInterval(() => {
  const n = 10 + Math.sin(t) * 5;
  const data = makeData(n, t);
  vizData(data);
  t = t + 0.005;
}, 1000 / 120);
