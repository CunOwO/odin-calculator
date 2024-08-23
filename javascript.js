const numBtn = document.querySelectorAll(".num-btn");
// const addBtn = 
const span = document.querySelector("span");

let operand1 ="";
let operand2 ="";
numBtn.forEach((button) => {
    button.addEventListener("click", () => {
        operand1 += button.textContent;
        span.textContent = operand1;
        if (!span.style.fontSize) {
            span.style.fontSize = window.getComputedStyle(span).fontSize;
        }
        if (span.offsetWidth > 297) {
            span.style.fontSize = (parseInt(span.style.fontSize) * 0.9) + "px";
        }
    });
});
function add(operand1, operand2) {
    return operand1 + operand2;
}

function substract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return operand1 / operand2;
}