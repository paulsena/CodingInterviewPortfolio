/* 
 * Attempts to make a palindrome out of a string of jumbled letters. If not possible returns -1
 * Inputs an array of strings
 */

var answerArray = palindromeCheck(["ivcci","abbb","cca"]);
console.log(answerArray);
//console.log(makeLetters("a", 3/2));

function palindromeCheck (words) {
	var answer = [];  

	for (var i in words) {
		answer.push(makePalindrome(words[i]));
	}

	return answer;
}

function makePalindrome (word) {
	var letters = [];
	var oddLetter = "";
	var firstHalf = "";
	var secondHalf = "";

	for (var i in word) {
		letters[word[i]] ? letters[word[i]]++ : letters[word[i]]=1;
	}

	for (var i in letters) {
		//Odd num of occurrences
		if (letters[i] % 2 == 1) {
			oddLetter += i;
			//Short circuit to run a little faster. Can only have one odd Letter
			if (oddLetter.length > 1) {
				return -1;
			}
		} 
		//Even
		else {
			var half = makeLetters(i, (letters[i]/2));
			firstHalf += half;
			secondHalf += half;
		}

	}

	if (oddLetter.length > 1) {
		return -1;
	}
	else {
		return firstHalf + oddLetter + secondHalf.split('').reverse().join('');
	}

}

function makeLetters(letter, count) {
	var answer = "";
	for (var i = 0; i < count; i++) {
		answer += letter;
	}
	return answer;
}