// DOM manipulation framework
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@6.6/+esm";

let container = document.getElementById("svg-container");

const width = window.innerWidth;
const height = window.innerHeight;

const range = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  return array;
};

// console.log(range(5));

const myRange = range(10);
// d for datum, a convention
// myRange.forEach(d => {
//   console.log(d);
// });
// for (let i = 0; i < myRange.length; i++) {
//   console.log(myRange(i));
// }

// console.log(
//   myRange.filter((d) => {
//     d % 2 === 0;
//   })
// );

// mutates and returns mutated array
console.log(
  [2, 4, 5, 1, 4, 7, 20, 24, 4, 3, 20003, 5000, 9, 99].sort().reverse()
);

// const sortable = [4, 3, 6, 2, 8, 20];
// sortable.sort().reverse();
// console.log(sortable); // Returns [8, 6, 4, 3, 20, 2]

const sortable = [4, 3, 6, 2, 8, 20];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// a more specific, robust way of sorting using the compareFunction, where returns a result based on pos/neg/0 comparison for the passed in function and comparing two values in the function
// pos/neg/0 is set up to allow for naturally assorting from lowest to largest aka ascending order
// use a sort function per the docs, where if result of function returns 0 or a positive or negative number then sorts a and b per the rules for the result's value (pos, neg, 0) eg if b - a is negative then sort b first
sortable.sort((a, b) => (b < a ? -1 : b > a ? 1 : 0)); // sorts same way but using pos/neg a as direct output to return a result according to the docs
// sortable.sort((a, b) => b.someField < a.someField ? -1 : 1); // sorts same way but using pos/neg a as direct output to return a result according to the docs
sortable.sort((a, b) => b - a); // returns properly, tells it to treat as numbers
console.log(sortable);

// but can use D3, D3 does that under the hood
sortable.sort((a, b) => d3.ascending(a, b));
console.log(sortable);

sortable.sort((a, b) => d3.descending(a, b));
console.log(sortable);


// can now use d3 methods on svg
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

const mask = svg.append("mask").attr("id", "circle-mask");

// appends the mask to the dom
mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black");

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "white");

const maskInverse = svg.append("mask").attr("id", "circle-mask-inverse");

maskInverse
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

maskInverse
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "black");
