const operator = prompt('enter operator(either +,-,* or /):');
const number1 = parseFloat(prompt('enter first number:'));
const number2 = parseFloat(prompt('enter second number:'));
let result
if (operator == '+') {
    result = number1 + number2;

}
else if (operator == '-') {
    result = number1 - number2;

}
else if (operator == '*') {
    result = number1 * number2;

}
else if (operator == '/') {
    result = number1 / number2;

}
window.alert(result);