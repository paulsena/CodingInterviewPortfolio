// Compare two arrays of strings and determine if each string pair is an anagram of each other.
// Returns a new array with 1 for True and 0 for False.

var answer = check_anagrams(["hia","as","ew"], ["ih","df","ere"]);
console.log(answer);

function check_anagrams(first_words, second_words) {
	var result = [];

	for (var i=0; i<first_words.length; i++) {
		result.push(isAnagram(first_words[i],second_words[i]));
	}
	return result;
}

function isAnagram(word1, word2) {
	var letterCnt = [];

	//Short Circuit
	if (word1.length != word2.length) {
		return 0;
	}

	//Count all letters with a HashMap
	for (var i in word1) {
		var ltr = word1[i];
		letterCnt[ltr] ? letterCnt[ltr]++ : letterCnt[ltr]=1;
	}
	
	//Subtract letters of seconds string from HashMap
	for (var i in word2) {
		var ltr = word2[i];
		letterCnt[ltr] ? letterCnt[ltr]-- : false;
	}

	//Look for anywhere there wasn't an equal number of letters
	for (var i in letterCnt) {
		if (letterCnt[i] != 0) {
			return 0;
		}
	}

	return 1;
}