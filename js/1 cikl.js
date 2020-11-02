"use strict";

if (1) {
  console.log(2);
}


let num = 50; 
//const num = 50;

//(num===60) ? console.log('ok') : console.log('error');

switch (num) {
  case 49:
    console.log("error");
    break;

  case 49:
    console.log("не верно");
    break;

  case '50':
    console.log("верно");
    break;

  default:
    console.log("?");
    break;
}

for (let i = 1; i < 8; i++) {
    console.log(num);
    console.log(i);
    num++;    
}
