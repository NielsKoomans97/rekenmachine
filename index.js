const numButtons = document.querySelectorAll('.calc-button-num');
const funcButtons = document.querySelectorAll('.calc-button-func');
const calcButton = document.querySelector('#calculate');
const invoer = document.querySelector('#invoer');
const funcIcon = document.querySelector('#func-icon');

let firstNum = '';
let secondNum = '';
let func = '';
let result = 0;

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (func == '') {
            firstNum += button.innerText;
            invoer.value = firstNum;
        }
        else {
            secondNum += button.innerText;
            invoer.value = secondNum;
        }
    });
});

funcButtons.forEach(button => {
    button.addEventListener('click', () => {
        func = button.innerText;
        invoer.value = '0';

        if (secondNum != ''){
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

    if (firstNum == '' || secondNum == '' || func == '') {
        return;
    }

    switch (func) {
        case '+':
            calcResult = parseInt(firstNum) + parseInt(secondNum);
            break;

        case '-':
            calcResult = parseInt(firstNum) - parseInt(secondNum);
            break;
    }

    firstNum = calcResult;
    secondNum = '';

    return calcResult;
}
