const numBtn = document.querySelectorAll(".num-btn");
const span = document.querySelector("span");
const operatorBtn = document.querySelector(".button-container");
const clearBtn = document.querySelector(".btn-clear");
const signChangeBtn = document.querySelector(".btn-sign-change");
const percentBtn = document.querySelector(".btn-percent");

let currentNumber = 0;
let currentResult = 0;
let input = "";
let previousOperation = null;

numBtn.forEach((button) => button.addEventListener("click", updateScreen));

clearBtn.addEventListener("click", clear);

signChangeBtn.addEventListener("click", toggleSign);

percentBtn.addEventListener("click", calculatePercentage);

operatorBtn.addEventListener("click", handleOperatorClick);

function updateScreen(e) {
    input += e.target.textContent;
    span.textContent = input;
    
    if (!span.style.fontSize) {
        span.style.fontSize = window.getComputedStyle(span).fontSize;
    }
    if (span.offsetWidth > 297) {
        span.style.fontSize = (parseInt(span.style.fontSize) * 0.9) + "px";
    }
}

function clear() {
    currentNumber = 0;
    currentResult = 0;
    input = "";
    previousOperation = null;
    span.textContent = 0;
}

function toggleSign() {
    currentNumber = Number(span.textContent) * (-1);
    input = currentNumber;
    span.textContent = currentNumber; 
}

function calculatePercentage() {
    currentNumber = Number(span.textContent) / 100;
    input = currentNumber;
    span.textContent = currentNumber; 
}

function handleOperatorClick(e) {
    let target = e.target;
    if (target.classList.contains("btn-add")) {
        handleOperation("add");
    }
    else if (target.classList.contains("btn-subtract")) {
        handleOperation("subtract");
    }
    else if (target.classList.contains("btn-multiply")) {
        handleOperation("multiply");
    }
    else if (target.classList.contains("btn-divide")) {
        handleOperation("divide");
    }
    else if (target.classList.contains("btn-equals")) {
        handleOperation("equals");
    }
}

function handleOperation(operation) {

    // Reset if "=" was pressed and input is not empty (start a new calculation)
    if (previousOperation === "equals" && input !== "") {
        currentResult = 0;
        previousOperation = null;
    }
    
    // If the previous operation was "equals" or input is empty, just update the operation and return
    if (previousOperation === "equals" || input === "") {
            previousOperation = operation;
            return;
        }
    
    // If there is input, perform the calculation
    if (input !== "") {
        currentNumber = Number(input);
        currentResult = calculate(currentResult, currentNumber, previousOperation);

        if (typeof currentResult === "number") {
            currentResult = +(Math.round(currentResult + "e+2")  + "e-2");
        }
        
        span.textContent = currentResult;
        input = "";
        previousOperation = operation;
    }
}

function calculate(operand1, operand2, operation) {
    switch(operation) {
        case "add":
            return operand1 + operand2;
        case "subtract":
            return operand1 - operand2;
        case "multiply":
            return operand1 * operand2;
        case "divide":
            return operand2 === 0 ? "Seriously bro?" : (operand1 / operand2);
        default:
            return operand2;
    }
}