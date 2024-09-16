"use strict";
//lowercase
let personName = " Karachi";
console.log("lowercase:", personName.toLocaleLowerCase());
//uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
