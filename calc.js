"use strict";
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelector("#clear").addEventListener("click", clear);
  document.querySelector("#calculate").addEventListener("click", calculate);
});
const results = document.querySelector("#results");
const input1 = document.querySelector("#firstnumber");
const input2 = document.querySelector("#secondnumber");
const checkbox = document.querySelector("#doround");
let operator;
let rounding;
let result;
let resultValue;
function clear() {
  //clear result feild
  results.innerHTML = "";
}
function calculate() {
  //Calc input fields
  operator = document.querySelector("#operator").value;
  if (operator === "add") {
    resultValue = parseInt(input1.value) + parseInt(input2.value);
  } else if (operator === "sub") {
    resultValue = input1.value - input2.value;
  } else if (operator === "mul") {
    resultValue = input1.value * input2.value;
  } else if (operator === "div") {
    resultValue = input1.value / input2.value;
  }
  //check if checkbox has been ticked
  if (checkbox.checked === true) {
    //figure out amount of decimals
    rounding = parseInt(document.querySelector("#decimals").value);
    //change output to rounded decimal value
    resultValue = resultValue.toFixed(rounding);
  }
  //Make first result equal to first input value
  input1.value = resultValue;

  //Append to result list and scroll
  result = document.createElement("li");
  result.textContent = resultValue;
  results.appendChild(result);
  results.scrollTop = results.scrollHeight;
}
