import * as d3 from "https://cdn.jsdelivr.net/npm/d3@6.6/+esm";

const width = window.innerWidth;

export function makeData(n, t) {
  const data = d3.range(n).map((d) => ({
    x: (d * width) / 15 + 25,
    y: 250 + Math.sin(d * 0.5 + t) * 200,
    r: 20 + Math.sin(d * 0.5 + t * 2) * 10,
  }));
  return data;
}
