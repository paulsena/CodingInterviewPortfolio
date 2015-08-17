//1.3 Given two strings, write a function to determine if one is a permutation of the other
function isPermutation (string1, string2) {
	if (string1.length != string2.length)
		return false;

	var str1Hash = [];
	for (var i in string1) {
		var key = string1[i];
		str1Hash[key] = str1Hash[key] ? str1Hash[key]++ : 1;
	}

	//console.log(str1Hash);

	for(var i in string2) {
		var key = string2[i];
		str1Hash[key] = str1Hash[key] ? str1Hash[key]-- : -1;
		if (str1Hash[key] < 0) {
			return false;
		}
	}

	return true;
}

console.log(isPermutation("Hello", "eHllO"));

/*
Pseudo Code
Option 1
-Count letters
-Compare Counts
O(N)
Time Efficient, Memory InEfficient if character set is very large

Option 2
-Sort Strings
-Compare Strings
O(N LOG N)
Time InEfficient, Memory Efficient
*/