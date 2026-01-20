const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
button.addEventListener('click', () => {
const value = button.innerText;


if (value === 'C') {
display.innerText = '0';
} else if (value === '=') {
try {
display.innerText = eval(display.innerText);
} catch {
display.innerText = 'Error';
}
} else {
if (display.innerText === '0') {
display.innerText = value;
} else {
display.innerText += value;
}
}
});
});


// Keyboard support
document.addEventListener('keydown', (e) => {
const key = e.key;


if (!isNaN(key) || key === '.') {
display.innerText = display.innerText === '0' ? key : display.innerText + key;
}
if (['+', '-', '*', '/'].includes(key)) {
display.innerText += key;
}
if (key === 'Enter') {
try {
display.innerText = eval(display.innerText);
} catch {
display.innerText = 'Error';
}
}
if (key === 'Backspace') {
display.innerText = display.innerText.slice(0, -1) || '0';
}
if (key.toLowerCase() === 'c') {
display.innerText = '0';
}

});