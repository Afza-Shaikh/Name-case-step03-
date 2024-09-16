//lowercase
let personName: string =" Karachi"
console.log("lowercase:",personName.toLocaleLowerCase());

//uppercase
console.log("uppercase:",personName.toLocaleUpperCase());

//titlecase
console.log("titlecase:",personName.replace(/\bw/g,c=>c.toUpperCase()));
