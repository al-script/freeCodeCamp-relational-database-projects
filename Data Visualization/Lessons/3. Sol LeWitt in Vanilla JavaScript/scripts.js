// const add = (a, b) => a + b;
// const add = (a, b) => {
//   return a + b
// }
// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2))

// let object = {
//   key: 'first value',
//   'second key': 'second value',
//   3: 'third value'
// };

// let testvar = 'key';

// console.log(object.key)
// console.log(object[testvar])
// console.log(object['key'])
// console.log(object['second key'])
// console.log(object['3'])
// console.log(object[3])

// // *** if want to implicity return an object with es6 shorthand then use ()
// let person = (a, b) => ({
//   a: b,
//   b: a
// })
// // can also use this for where property name matches variable name:
// let person2 = (a, c) => ({
//   a,
//   c
// })
// console.log(person('test','test2'))
// console.log(person2('test','test2'))

// console.log(document.body)

let container = document.getElementById("svg-container");
// let svg = document.createElement('svg');
// svg.classList.add('svg-component');
// container.innerHTML += svg;

const width = window.innerWidth;
const height = window.innerHeight;

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);
container.appendChild(svg);

// const n = 100;
// for (let i = 0; i < n; i++) {
//   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//   rect.setAttribute("x", i*20);
//   // rect.setAttribute("width", i/2);
//   rect.setAttribute("width", 10);
//   rect.setAttribute("height", height);
//   svg.appendChild(rect);
// }

const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
mask.setAttribute("id", "circle-mask");
svg.appendChild(mask);

// when mask applied, are only seeing what is defined within the mask
// black invisible
// white visible
// mask rect creates an inverse mask

// white, allows visibility for the unmasked areas
const maskRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
maskRect.setAttribute("width", width);
maskRect.setAttribute("height", height);
maskRect.setAttribute("fill", "white");
mask.appendChild(maskRect);

//black, allows invisibility for the masked areas (in this case, everything within a circle, if area falls under circle, is invisible)
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", width / 2);
circle.setAttribute("cy", height / 2);
circle.setAttribute("r", 200);
circle.setAttribute("fill", "black");
mask.appendChild(circle);

const n = 100;
for (let i = 0; i < n; i++) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("y", i * 20);
  rect.setAttribute("width", width);
  rect.setAttribute("height", 10);
  rect.setAttribute("mask", "url(#circle-mask");
  svg.appendChild(rect);
}
