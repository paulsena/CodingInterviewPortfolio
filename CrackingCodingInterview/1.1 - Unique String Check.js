function isUniqueString (testString) {
	var charCount = [];

	for (var i in testString) {
		var charIndex = testString.charCodeAt(i);
		if (typeof charCount[charIndex] != "number") { 
			charCount[charIndex]=1;
		} else {
			charCount[charIndex]++;
		}
		
		if (charCount[charIndex] > 1) {
			return false;
		}
	} 

	return true;
}

console.log( isUniqueString("AaSDFA") );

/*
Pseudeo Code
-Char Array size of Alphabet. Stores count of characters
-Loop for each char in string

*/
