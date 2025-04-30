"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superFacaReact = superFacaReact;
const params = new URLSearchParams(window.location.search);
const AValue = params.get('a');
let facaName = "super faca text: " + AValue;
console.log(facaName);
console.log("hello normal fff world");
function superFacaReact() {
    alert("hello world com faca");
    console.log("hello world com faca second comming");
}
