const params = new URLSearchParams(window.location.search);
const AValue = params.get('a');

let facaName:string = "super faca text: "+AValue;

console.log(facaName);
console.log("hello normal fff world")

export function superFacaReact(){
    alert("hello world com faca");
    console.log("hello world com faca second comming");
}

