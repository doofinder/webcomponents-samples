import { Context } from "https://cdn.doofinder.com/dev/v8/webcomponents.min.js";

// Do an initial query with "shoes" term (This code is optional).
let context = Context.getContext("7a6100c782c09126479e9270ecc619b3", "eu1-search.doofinder.com"); 
context.query.text = "red";
context.search();

// hide layer when the search dialog is closed
document.querySelector("#close_button").onclick = function(e){
document.querySelector("#df-classic").hide();
};