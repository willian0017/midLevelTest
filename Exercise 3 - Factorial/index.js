function calculateFactorial() {
    const number = +prompt("Enter a number");
  
    if (isNaN(number) || number < 0) {
        alert("Not a number or negative number.");
        return;
    }

    const result = factorial(number);
    document.getElementById('label').textContent = `The factorial of  ${number} is: `;
    document.getElementById('result').textContent = result;
  }

  function factorial(number) {
    return (number === 0 || number === 1) ? 1 : number * factorial(number - 1);
  }
  
  calculateFactorial();