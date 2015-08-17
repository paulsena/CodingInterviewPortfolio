/* Determine if a string is a palindrome. 
 * String is not in palindrome form. It's mixed up.
 */

processData("aabbccd");

function processData(input) {
    
    // Sort, count length, count pairs
    var srtLetters = input.split('').sort();
    var isOdd = srtLetters.length % 2;
    var oddLetterCnt = 0;
    
    //Short Circuit expression can peform less then O(n)
    for (var i=0; i < srtLetters.length && oddLetterCnt < 2;) {
        if (srtLetters[i] == srtLetters[i+1]) {
            i += 2;
        } else {
            i++;
            oddLetterCnt++;
        }
    }
    
    if ((isOdd && oddLetterCnt == 1) || (!isOdd && oddLetterCnt == 0)) {
        console.log('YES');
    } else {
        console.log('NO');
    }
} 

