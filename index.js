const numButtons = document.querySelectorAll('.calc-button-num');
const funcButtons = document.querySelectorAll('.calc-button-func');
const calcButton = document.querySelector('#calculate');
const invoer = document.querySelector('#invoer');

let firstNum = '';
let secondNum = '';
let func = '';
let result = 0;
let memory = [];

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (func == '') {
            firstNum += button.innerText;
            invoer.value = firstNum;
            memory.push(firstNum);
        }
        else {
            secondNum += button.innerText;
            invoer.value = secondNum;
            memory.push(secondNum);
        }
    });
});

funcButtons.forEach(button => {
    button.addEventListener('click', () => {
        func = button.innerText;
        invoer.value = '0';

        if (secondNum != '') {
            result = calculate();
            invoer.value = result;
        }
    });
});

calcButton.addEventListener('click', () => {
    result = calculate();
    invoer.value = result;
});

function calculate() {
    let calcResult = 0;

    if (firstNum == '' || func == ''){
        return;
    }

    if(secondNum == ''){
        secondNum = memory[memory.length - 1];
    }

    switch (func) {
        case '+':
            calcResult = parseFloat(firstNum) + parseFloat(secondNum);
            break;

        case '-':
            calcResult = parseFloat(firstNum) - parseFloat(secondNum);
            break;

        case '/':
            calcResult = parseFloat(firstNum) / parseFloat(secondNum);
            break;

        case '*':
            calcResult = parseFloat(firstNum) * parseFloat(secondNum);
            break;
    }

    firstNum = calcResult;
    secondNum = '';

    return calcResult;
}
