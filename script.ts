const params = new URLSearchParams(window.location.search);
const AValue = params.get('a');

let facaName:string = "super faca text: "+AValue;

console.log(facaName);
console.log("hello normal fff world")

