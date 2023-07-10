let container = document.getElementById("svg-container");

const width = window.innerWidth;
const height = window.innerHeight;

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);
container.appendChild(svg);

const n = 1100;
for (let i = 0; i < n; i++) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", i * 20);
  rect.setAttribute("width", i / 10);
  rect.setAttribute("height", i * height);
  rect.setAttribute("mask", "url(#circle-mask-inverse");
  if (Math.abs(i % 2) == 1) {
    rect.classList.add('exp1');
  } else {
    rect.classList.add('exp2');
  }
  svg.appendChild(rect);
}

for (let i = 0; i < n; i++) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("y", i * 20);
  rect.setAttribute("width", i * width);
  rect.setAttribute("height", i / 10);
  rect.setAttribute("mask", "url(#circle-mask");
  if (Math.abs(i % 2) == 1) {
    rect.classList.add('exp2');
  } else {
    rect.classList.add('exp1');
  }
  svg.appendChild(rect);
}

for (let i = 0; i < n; i++) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", ((i / 2.5) * width) / 2 / 2);
  circle.setAttribute("cy", ((i / 2.5) * height) / 2 / 2);
  circle.setAttribute("r", 5 * i);
  circle.setAttribute("fill", "white");
  if (Math.abs(i % 2) == 1) {
    circle.classList.add('even');
    circle.classList.add('exp2');
  } else {
    circle.classList.add('odd');
    circle.classList.add('exp1');
  }
  svg.appendChild(circle);
}

for (let i = 0; i < n; i++) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", ((i / 2.5) * width) / 2 / 2);
  circle.setAttribute("cy", ((i / 2.5) * height) / 2 / 2);
  circle.setAttribute("r", 50 / i);
  circle.setAttribute("fill", "black");
  if (Math.abs(i % 2) == 1) {
    circle.classList.add('odd');
    circle.classList.add('exp1');
  } else {
    circle.classList.add('even');
    circle.classList.add('exp2');
  }
  svg.appendChild(circle);
}




for (let i = 0; i < n; i++) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", 1/(((i / 2.5) * width) / 2 / 2));
  circle.setAttribute("cy", ((i / 2.5) * height) / 2 / 2);
  circle.setAttribute("r", 5 * i);
  circle.setAttribute("fill", "white");
  if (Math.abs(i % 2) == 1) {
    circle.classList.add('even');
    circle.classList.add('exp2');
  } else {
    circle.classList.add('odd');
    circle.classList.add('exp1');
  }
  svg.appendChild(circle);
}

for (let i = 0; i < n; i++) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", ((i / 2.5) * width) / 2 /2);
  circle.setAttribute("cy", 1/(((i / 2.5) * height) / 2 / 2));
  circle.setAttribute("r", 5 * i);
  circle.setAttribute("fill", "white");
  if (Math.abs(i % 2) == 1) {
    circle.classList.add('odd');
    circle.classList.add('exp1');
  } else {
    circle.classList.add('even');
    circle.classList.add('exp2');
  }
  svg.appendChild(circle);
}