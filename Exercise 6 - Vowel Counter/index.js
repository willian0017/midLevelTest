function vowelCounter(phrase) {
    const phrase = prompt("Enter a phrase")
    const vowels = ['a', 'e', 'i', 'o', 'u']
    var count = 0;

    for (let letter of phrase.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const result = vowelCounter(phrase);
document.getElementById('label').textContent = 'The vowels quantity is: ';
document.getElementById('result').textContent = result;
