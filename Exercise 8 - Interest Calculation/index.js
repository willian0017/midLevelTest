function calculateFinalValue() {
    var initialCapital = +prompt('Enter an initial capital')
    var interestRate = +prompt('Enter an interest rate (%)')
    var investmentTime = +prompt('Enter an investiment time (quantity of months)')

    if (isNaN(initialCapital) || isNaN(interestRate) || isNaN(investmentTime)) {
      alert("Not a number.");
      return;
    }
  
    const decimalInterestRate = interestRate / 100;
    const finalValue = initialCapital * (1 + decimalInterestRate) ** investmentTime;
  
    result = finalValue.toFixed(2);
    document.getElementById('label').textContent = `The final value of your investment after ${investmentTime} month(s) is: `;
    document.getElementById('result').textContent = result.toString();
  }
  
  calculateFinalValue();
