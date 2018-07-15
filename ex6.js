function palindromeAngka (num) {
    while (true) {
        num++
        var palindrome = ''
        var str = String(num)
        for (var i = str.length - 1; i >= 0; i--) {
            palindrome = palindrome + str[i]
        }
        console.log(palindrome);
        
        if (palindrome == num) {
            false
            return num;
        }
    }
}
console.log(palindromeAngka(8));
// console.log(palindromeAngka(10));
// console.log(palindromeAngka(117));
// console.log(palindromeAngka(175));
// console.log(palindromeAngka(1000));