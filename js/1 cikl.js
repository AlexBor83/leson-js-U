"use strict";

const options = {
  name: "test",
  Width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log('tst')
  }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border)

let counter = 0;

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

console.log(Object.keys(options).length);

