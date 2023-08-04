function multiplicationTable() {
    const number = +prompt("Enter a number");

    if (isNaN(number)) {
        alert("Not a number.");
        return;
    }

    let tableString = '';

    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        tableString += `${number} x ${i} = ${result}<br>`;
    }
    document.getElementById('label').textContent = `The result is: `;
    document.getElementById('result').innerHTML = tableString;
}
  
multiplicationTable();