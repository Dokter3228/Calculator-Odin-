const display = document.querySelector(".display");
// Buttons
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.querySelector("#btn-8");
const btn9 = document.querySelector("#btn-9");

let result = "";

function addDisplay(e) {
  result += e.textContent;
  console.log(result);
  display.textContent = result;
}

btn1.addEventListener("click", function () {
  addDisplay(btn1);
});
btn2.addEventListener("click", function () {
  addDisplay(btn2);
});
btn3.addEventListener("click", function () {
  addDisplay(btn3);
});
btn4.addEventListener("click", function () {
  addDisplay(btn4);
});
btn5.addEventListener("click", function () {
  addDisplay(btn5);
});
btn6.addEventListener("click", function () {
  addDisplay(btn6);
});
btn7.addEventListener("click", function () {
  addDisplay(btn7);
});
btn8.addEventListener("click", function () {
  addDisplay(btn8);
});
btn9.addEventListener("click", function () {
  addDisplay(btn9);
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}
