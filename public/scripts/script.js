"use strict";
const params = new URLSearchParams(window.location.search);
const AValue = params.get('a');
let facaName = "super faca text: " + AValue;
console.log(facaName);
console.log("hello normal fff world");
