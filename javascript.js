const numBtn = document.querySelectorAll(".num-btn");
const span = document.querySelector("span");
const buttons = document.querySelector(".button-container");
let currentNumber = 0;
let currentResult = 0;
let input = "";
let previousOperation = null;

numBtn.forEach((button) => button.addEventListener("click", updateScreen));

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

buttons.addEventListener("click", (e) => {
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
});

function handleOperation(operation) {
    if (input !== "") {
        currentNumber = Number(input);
        currentResult = calculate(currentResult, currentNumber, previousOperation);
        
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
            return operand1 / operand2;
        default:
            return operand2;
    }
}

