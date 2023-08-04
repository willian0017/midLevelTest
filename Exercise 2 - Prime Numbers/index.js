function checkPrimeNumber() {
    var number = +prompt('Enter a number')
    var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    if (primeNumbers.includes(number)) {
        alert("It's a prime number")
        document.getElementById('label').textContent = `The first 10 prime numbers are: `;
        document.getElementById('result').textContent = primeNumbers.slice(0, 10).toString();
    } else {
        alert("It's not a prime number")
    };
}

checkPrimeNumber();