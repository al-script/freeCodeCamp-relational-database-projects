export function vizData(selection, data) {
  selection
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)
    .attr("rx", (d) => d.rx)
    .attr("width", (d) => d.width)
    .attr("height", (d) => d.height)
    .attr("fill", (d) => d.fill);
}
