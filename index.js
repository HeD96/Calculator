let num1 = 0;
let num2 = 0;
let operator = "";
// const reg = /+/gi

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

                if (screen.textContent !== '' && reg.test(screen.textContent) === false) {
                    screen.textContent += 'x';
                }
                break;
            case btn.classList.contains('add'):

            // if (screen.textContent !== '' && reg.test(screen.textContent) === false) {
            //     screen.textContent += '+';
            // }
                break;
            case btn.classList.contains('subtract'):
                screen.textContent = '-';
                break;
            case btn.classList.contains('divide'):
                screen.textContent = '/';
                break;
            case btn.classList.contains('equal'):
                screen.textContent = '=';
                break;
        }
    });
});

function Operate(n1, n2, op) {
    
}

function Add(a, b) {
    return a + b;
}

function Substract(a, b) {
    return a - b;
}

function Multiply(a, b) {
    return a * b;
}

function Divide(a, b) {
    return a / b;
}