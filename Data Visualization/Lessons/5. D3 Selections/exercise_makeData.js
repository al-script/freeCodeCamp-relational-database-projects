import * as d3 from "https://cdn.jsdelivr.net/npm/d3@6.6/+esm";

const width = window.innerWidth;
const height = window.innerHeight;

const colors = ['red', 'green', 'blue']

export function makeData(n, t) {
  const data = d3.range(n).map((d) => ({
    x: (d * width) / 15 + 25,
    y: 250 + (Math.tan(d * 0.5 + t) * height/2),
    width: 20 + Math.sin(d * 0.5 + t * 2) * 1,
    height: Math.abs(20 + (Math.sin(d * 0.5 + t * 2) * height) / 2),
    fill: colors[2],
    rx: 100
  }));
  return data;
}
