let numBuf = 0;
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = "";
const regNums = /[0-9]+/g;
const regOps = /[^\d]/g

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen span');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        switch (true) {

            case btn.classList.contains('zero'):
                screen.textContent = '0';
                break;
            case btn.classList.contains('one'):
                screen.textContent += '1';
                break;
            case btn.classList.contains('two'):
                screen.textContent += '2';
                break;
            case btn.classList.contains('three'):
                screen.textContent += '3';
                break;
            case btn.classList.contains('four'):
                screen.textContent += '4';
                break;
            case btn.classList.contains('five'):
                screen.textContent += '5';
                break;
            case btn.classList.contains('six'):
                screen.textContent += '6';
                break;
            case btn.classList.contains('seven'):
                screen.textContent += '7';
                break;
            case btn.classList.contains('eight'):
                screen.textContent += '8';
                break;
            case btn.classList.contains('nine'):
                screen.textContent += '9';
                break;
            case btn.classList.contains('multiply'):
                screen.textContent += 'x';
                break;
            case btn.classList.contains('add'):
                screen.textContent += '+';
                break;
            case btn.classList.contains('subtract'):
                screen.textContent += '-';
                break;
            case btn.classList.contains('divide'):
                screen.textContent += '/';
                break;

            case btn.classList.contains('clear'):
                screen.textContent = '';
                result = 0;
                break;
            case btn.classList.contains('delete'):
                
                screen.textContent.substring(0, str.length - 1);
                break;

            case btn.classList.contains('equal'):
                operator = screen.textContent.match(regOps)[0];
                console.log(operator);
                num1 = parseInt(screen.textContent.match(regNums)[0]);
                num2 = parseInt(screen.textContent.match(regNums)[1]);
                console.log(num1, num2);

                Operate(num1, num2, operator);
                break;
        }
    });
});

function Operate(n1, n2, op) {
    switch (op) {
        case '+':
        console.log(Add(n1, n2));
        break;
    }
    switch (op) {
        case '-':
        console.log(Subtract(n1, n2));
        break;
    }
    switch (op) {
        case '/':
        console.log(Divide(n1, n2));
        break;
    }
    switch (op) {
        case 'x':
        console.log(Multiply(n1, n2));
        break;
    }
}

function Add(a, b) {
    screen.textContent = a + b;
    result += a + b;
    return a + b;
}

function Substract(a, b) {
    screen.textContent = a - b;
    result += a - b;
    return a - b;
}

function Multiply(a, b) {
    screen.textContent = a * b;
    result += a * b;
    return a * b;
}

function Divide(a, b) {
    screen.textContent = a / b;
    result += a / b;
    return a / b;
}