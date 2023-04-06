let numBuf = 0;
let num1 = 0;
let num2 = 0;
let operator = "";
const regNums = /[0-9]{1,5}[a-z]/g;
const regOps = /[^\w]/

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
                break;
            case btn.classList.contains('delete'):
                
                screen.textContent.substring(0, str.length - 1);
                break;

            case btn.classList.contains('equal'):
                operator = screen.textContent.match(regOps)[0];
                console.log(operator);
                // console.log(screen.textContent.match(regOps));
                Operate(num1, num2, operator);
                break;
        }
    });
});

function Operate(n1, n2, op) {
    switch (op) {
        case '+':
            console.log('gotcha add');
        // Add(n1, n2);
    }
    switch (op) {
        case '-':
            console.log('gotcha sub');
        // Subtract(n1, n2);
    }
    switch (op) {
        case '/':
            console.log('gotcha divide');
        // Divide(n1, n2);
    }
    switch (op) {
        case 'x':
        console.log('gotcha multiply');
        // Multiply(n1, n2);
    }
}

function Add(a, b) {
    return a + b;
}

function Substract(a, b) {
    return a - b;
}

function Multiply(a, b) {
    let result = a * b;
    screen.textContent = result; 
    // return a * b;
}

function Divide(a, b) {
    return a / b;
}