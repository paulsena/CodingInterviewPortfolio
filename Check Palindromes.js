//Palindrome
//Find index of bad character in Palindrome


console.log(palyCheck('bcdceb'));
console.log(palyCheck('bcbe'));
console.log(palyCheck('ebcb'));
console.log(palyCheck('aba'));

function palyCheck(s, i, j) {
	i = typeof i !== 'undefined'?i:0;
	j = typeof j !== 'undefined'?j:s.length-1;

	while (i<=j) {
		if (s[i]!=s[j]) {
			var invalidChar = j;
			if (palyCheck(s, i, j-1) == -1) {
				return j;
			}
			else {
				return i;
			}
		}
		i++; j--;
	}

	return -1;
}

function findNonPalyLetter(s) {
	var i=0; var j=s.length-1;

	while (i<=j) {

	}
}