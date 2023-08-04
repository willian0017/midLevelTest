function checkPalindrome() {
    var word = prompt("Enter an word!")
    palindrome = word.split('').reverse().join('');
    wordUpperCase = word.charAt(0).toUpperCase() + word.slice(1);

    if (palindrome === word) {
        result = `${wordUpperCase} is a palindrome`;
        document.getElementById('result').textContent = result;
    } else {
        result = `${wordUpperCase} is NOT palindrome`;
        document.getElementById('result').textContent = result;
    }
}

checkPalindrome()
