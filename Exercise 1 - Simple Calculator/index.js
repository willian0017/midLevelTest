function calculator () {
    var number1 = +prompt('Enter a number')
    var number2 = +prompt('Enter another number')

    if (isNaN(number1) || isNaN(number2)) {
        alert('Not a number')
        return;
    }

    var operator = prompt('Enter an operator (+, -, *, /)')
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        alert('Not an operator')
        return;
    }

    switch (operator) {
        case '+':
            var result = number1 + number2 
            break;
        case '-':
            var result = number1 - number2 
            break;
        case '*':
            var result = number1 * number2 
            break;
        case '/':
            var result = number1 / number2 
            break;
        default:
            break;
    }
        
    document.getElementById('label').textContent = `The result of the ${number1} ${operator} ${number2} is: `;
    document.getElementById('result').textContent = result.toString();
}

calculator();
